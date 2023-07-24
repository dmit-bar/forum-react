import { getFakeTopics } from "@api/fakeApi";
import { ITopic } from "@api/models";
import { Topic } from "@components/molecules";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import invariant from "tiny-invariant";

const Topics = () => {
  const params = useParams();
  const sectionId = params.id;
  invariant(sectionId, "Missing section id in url");

  const [topics, setTopics] = useState<ITopic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getFakeTopics(sectionId)
      .then((t) => setTopics(t))
      .finally(() => setIsLoading(false));
  }, [sectionId]);

  return (
    <>
      <Helmet>
        <title>{sectionId}</title>
      </Helmet>
      <div>
        {isLoading && <div className="text-stone-100">Loading...</div>}
        {!isLoading && !topics.length && (
          <div className="text-stone-100">No results found</div>
        )}
        {!isLoading && topics.length
          ? topics.map((topic) => <Topic key={topic.id} {...topic} />)
          : null}
      </div>
    </>
  );
};

export { Topics };
