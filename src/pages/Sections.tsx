import { ISection } from "@api/models";
import { Section } from "@components/organisms";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const getFakeSections = async (): Promise<ISection[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sections: ISection[] = [
        {
          id: "0",
          mnemocode: "movies-tv",
          title: "Movies & TV",
          description: "Talk about movies and TV, please.",
          topics: [],
        },
        {
          id: "1",
          mnemocode: "music",
          title: "Music",
          description: "Talk about music, please.",
          topics: [],
        },
        {
          id: "2",
          mnemocode: "videogames",
          title: "Video Games",
          description: "Talk about video games, please.",
          topics: [],
        },
        {
          id: "3",
          mnemocode: "books",
          title: "Books",
          description: "Talk about books, please.",
          topics: [],
        },
        {
          id: "4",
          mnemocode: "coding",
          title: "Programming",
          description: "Talk about coding, please.",
          topics: [],
        },
      ];

      resolve(sections);
    }, 500);
  });
};

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
        {isLoading && <div>Loading...</div>}
        {!isLoading && !sections.length && <div>No results found</div>}
        {!isLoading &&
          sections.length &&
          sections.map((section, idx) => (
            <Section
              key={section.mnemocode}
              mnemocode={section.mnemocode}
              title={section.title}
              description={section.description}
              link={section.mnemocode}
              className={idx > 0 ? "border-t" : ""}
            />
          ))}
      </div>
    </>
  );
};

export { Sections };
