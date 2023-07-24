import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TextLinkProps {
  to: string;
  children: ReactNode;
}

const TextLink = ({ to, children }: TextLinkProps) => {
  return (
    <Link
      to={to}
      tabIndex={0}
      className={clsx(
        "underline text-amber-400 hover:text-amber-200 active:text-amber-500 transition-colors",
      )}
    >
      {children}
    </Link>
  );
};

export { TextLink };
