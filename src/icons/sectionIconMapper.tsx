import { ReactComponent as SvgBooks } from "./books.svg";
import { ReactComponent as SvgCoding } from "./coding.svg";
import { ReactComponent as SvgMoviesTv } from "./movies-tv.svg";
import { ReactComponent as SvgMusic } from "./music.svg";
import { ReactComponent as SvgVideoGames } from "./videogames.svg";

const sectionIconMapper = (mnemocode: string) => {
  switch (mnemocode) {
    case "books":
      return <SvgBooks width="40px" height="40px" />;
    case "coding":
      return <SvgCoding width="40px" height="40px" />;
    case "movies-tv":
      return <SvgMoviesTv width="40px" height="40px" />;
    case "music":
      return <SvgMusic width="40px" height="40px" />;
    case "videogames":
      return <SvgVideoGames width="40px" height="40px" />;
    default:
      return null;
  }
};

export { sectionIconMapper };
