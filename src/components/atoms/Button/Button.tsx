import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  block?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  view?:
    | "primary-default"
    | "secondary-default"
    | "primary-small"
    | "secondary-small";
  children?: React.ReactNode;
}

const Button = ({
  block,
  disabled,
  type = "button",
  view = "primary-default",
  children,
}: ButtonProps) => {
  return (
    <div className={block ? "w-full" : ""}>
      <button
        disabled={disabled}
        type={type}
        className={clsx(
          "rounded-lg border font-medium",
          { "w-full": block },
          {
            "py-1 px-4": view.includes("default"),
          },
          {
            "text-sm py-1 px-3": view.includes("small"),
          },
          {
            "bg-slate-400 hover:bg-slate-400 border-slate-400 text-slate-600":
              disabled,
          },
          {
            "bg-red-600 border-red-600 text-slate-50 hover: hover:bg-red-500 hover:border-red-500 active:bg-red-700 active:border-red-700":
              view.includes("primary") && !disabled,
          },
          {
            "bg-slate-50 border-slate-950 text-slate-950 hover:bg-slate-200 hover:border-slate-950 active:bg-slate-300":
              view.includes("secondary") && !disabled,
          },
        )}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
