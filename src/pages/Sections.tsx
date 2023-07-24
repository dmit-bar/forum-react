import { getFakeSections } from "@api/fakeApi";
import { ISection } from "@api/models";
import { Section } from "@components/organisms";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Sections = () => {
  const [sections, setSections] = useState<ISection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFakeSections()
      .then((fakeSections) => setSections(fakeSections))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Helmet>
        <title>Sections</title>
      </Helmet>
      <div className="flex flex-col px-2">
        {isLoading && <div className="text-stone-100">Loading...</div>}
        {!isLoading && !sections.length && (
          <div className="text-stone-100">No results found</div>
        )}
        {!isLoading && sections.length
          ? sections.map((section, idx) => (
              <Section
                key={section.mnemocode}
                mnemocode={section.mnemocode}
                title={section.title}
                description={section.description}
                link={section.mnemocode}
                className={idx > 0 ? "border-t border-stone-500" : ""}
              />
            ))
          : []}
      </div>
    </>
  );
};

export { Sections };
