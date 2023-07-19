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
        "underline font-bold text-orange-400 hover:text-orange-300 active:text-orange-500",
      )}
    >
      {children}
    </Link>
  );
};

export { TextLink };
