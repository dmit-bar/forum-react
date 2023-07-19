import { sectionIconMapper } from "@icons/sectionIconMapper";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { TextLink } from "../../atoms";

interface SectionProps {
  className?: string;
  mnemocode: string;
  title: string;
  description: string;
  link: string;
}

const Section = ({
  className,
  mnemocode,
  title,
  description,
  link,
}: SectionProps) => {
  return (
    <section
      className={clsx("flex items-center py-1 text-stone-100 px-2", className)}
    >
      <Link to={link} className="mr-2">
        <div className="w-12 h-12 flex place-items-center place-content-center">
          {sectionIconMapper(mnemocode)}
        </div>
      </Link>

      <div className="block">
        <div>
          <TextLink to={link}>{title}</TextLink>
        </div>
        <div className="text-sm text-stone-100">{description}</div>
      </div>
    </section>
  );
};

export { Section };
