import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  block?: boolean;
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
  type = "button",
  view = "primary-default",
  children,
}: ButtonProps) => {
  return (
    <div className={block ? "w-full" : ""}>
      <button
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
            "bg-slate-950 border-slate-950 text-slate-50 hover: hover:bg-slate-700 hover:border-slate-700 active:bg-slate-950":
              view.includes("primary"),
          },
          {
            "bg-slate-50 border-slate-950 text-slate-950 hover:bg-slate-200 hover:border-slate-950 active:bg-slate-300":
              view.includes("secondary"),
          },
        )}
      >
        {children}
      </button>
    </div>
  );
};

export { Button };
