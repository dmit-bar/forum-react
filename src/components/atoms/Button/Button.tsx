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
          "rounded-lg border font-medium transition-colors",
          { "w-full": block },
          {
            "py-1 px-4": view.includes("default"),
          },
          {
            "text-sm py-1 px-3": view.includes("small"),
          },
          {
            "bg-stone-400 hover:bg-stone-400 border-stone-400 text-stone-600 cursor-not-allowed":
              disabled,
          },
          {
            "bg-amber-600 border-amber-600 text-stone-50 hover: hover:bg-amber-500 hover:border-amber-500 active:bg-amber-700 active:border-amber-700":
              view.includes("primary") && !disabled,
          },
          {
            "bg-stone-50 border-stone-950 text-stone-950 hover:bg-stone-200 hover:border-stone-950 active:bg-stone-300":
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
