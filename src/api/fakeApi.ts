import { ISection } from "./models";

export const loginWithCreds = async (formData: {
  login: string;
  password: string;
}): Promise<{ ok: boolean; token: string }> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(
        formData.login === "error"
          ? { ok: false, token: "" }
          : { ok: true, token: "fake-token" },
      );
    }, 1000),
  );
};

export const getFakeSections = async (): Promise<ISection[]> => {
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
          description:
            "Talk about infinite loops, please. Talk about infinite loops, please. Talk about infinite loops, please. Talk about infinite loops, please. Talk about infinite loops, please.",
          topics: [],
        },
      ];

      resolve(sections);
    }, 500);
  });
};
