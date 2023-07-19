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
        "underline font-bold text-red-500 hover:text-red-400 active:text-red-700",
      )}
    >
      {children}
    </Link>
  );
};

export { TextLink };
