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
            { "text-slate-100": !error },
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
            "w-full rounded-sm border  px-2 py-1 font-medium text-slate-100",
            // {
            //   "text-slate-300 border-slate-400 bg-slate-400":
            //     inputProps.disabled,
            // },
            {
              "bg-slate-400 hover:bg-slate-400 border-slate-400 text-slate-600 cursor-not-allowed":
                inputProps.disabled,
            },
            {
              "text-slate-100 border-slate-500 bg-slate-500":
                !error && !inputProps.disabled,
            },
            { "text-slate-100 border-red-500": error },
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
