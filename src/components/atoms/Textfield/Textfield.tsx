import clsx from "clsx";
import { forwardRef } from "react";

interface TextfieldProps extends React.HTMLProps<HTMLInputElement> {
  block?: boolean;
  label?: string;
  error?: string | null;
}

type TextfieldRef = HTMLInputElement;

const Textfield = forwardRef<TextfieldRef, TextfieldProps>((props, ref) => {
  const { block, label, error, ...inputProps } = props;

  return (
    <div className={block ? "w-full" : ""}>
      {label && (
        <label
          htmlFor="login"
          className={clsx(
            "block text-sm font-medium ",
            { "text-stone-100": !error },
            { "text-red-500": error },
          )}
        >
          {label}
        </label>
      )}
      <div className={clsx("pt-1 relative", { "w-full": block })}>
        <input
          ref={ref}
          {...inputProps}
          className={clsx(
            "w-full rounded-sm border  px-2 py-1 font-medium text-stone-100",
            {
              "bg-stone-400 hover:bg-stone-400 border-stone-400 text-stone-600 cursor-not-allowed":
                inputProps.disabled,
            },
            {
              "text-stone-100 border-stone-500 bg-stone-500":
                !error && !inputProps.disabled,
            },
            { "text-stone-100 border-red-500 bg-stone-500": error },
          )}
        />
        {error ? (
          <div
            className="text-red-500 text-sm absolute"
            id={`${props.id || ""}-error`}
          >
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
});

Textfield.displayName = "Textfield";

export { Textfield };
