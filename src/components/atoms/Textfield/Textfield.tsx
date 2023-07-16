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
            { "text-gray-950": !error },
            { "text-red-700": error },
          )}
        >
          {label}
        </label>
      )}
      <div className={clsx("mt-1", { "w-full": block })}>
        <input
          ref={ref}
          {...inputProps}
          className={clsx(
            "w-full rounded-sm border px-2 py-1 font-medium",
            { "border-gray-950": !error },
            { "border-red-700": error },
          )}
        />
        {error ? (
          <div className="text-red-700 text-sm" id={`${props.id || ""}-error`}>
            {error}
          </div>
        ) : null}
      </div>
    </div>
  );
});

Textfield.displayName = "Textfield";

export { Textfield };
