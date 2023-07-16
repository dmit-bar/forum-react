import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TextLinkProps {
  to: string;
  children: ReactNode;
}

const TextLink = ({ to, children }: TextLinkProps) => {
  return (
    <Link to={to}>
      <a
        className={clsx(
          "underline font-bold text-slate-950 hover:text-slate-600 active:text-slate-950",
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export { TextLink };
