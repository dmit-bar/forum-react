import { TextLink } from "@components/atoms";
import { ReactComponent as SvgTopic } from "@icons/topic.svg";
import { Link } from "react-router-dom";

interface TopicProps {
  id: string;
  title: string;
  description: string;
}

const Topic = ({ id, title, description }: TopicProps) => {
  return (
    <section id={id} className="py-1 px-2 flex">
      <Link to={id} className="mr-2">
        <div className="w-12 h-12 flex place-items-center place-content-center">
          <SvgTopic width="40px" height="40px" />
        </div>
      </Link>
      <div className="block">
        <header className="text-stone-100">
          <TextLink to={id}>{title}</TextLink>
        </header>
        <main className="text-stone-100 text-sm">{description}</main>
      </div>
    </section>
  );
};

export { Topic };
