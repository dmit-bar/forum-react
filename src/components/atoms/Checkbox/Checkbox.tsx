import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import colors from "tailwindcss/colors";

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
}

const Checkbox = ({ id, name, label }: CheckboxProps) => {
  return (
    <>
      <RadixCheckbox.Root
        className="border-2 border-slate-950 flex h-4 w-4 appearance-none items-center justify-center rounded-sm"
        id={id}
        name={name}
      >
        <RadixCheckbox.Indicator className="bg-slate-950">
          <CheckIcon color={colors.slate[50]} />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        className="pl-2 text-sm leading-none text-slate-950 select-none"
        htmlFor={id}
      >
        {label}
      </label>
    </>
  );
};

export { Checkbox };
