import { ReactComponent as SvgBooks } from "./books.svg";
import { ReactComponent as SvgCoding } from "./coding.svg";
import "./icons.css";
import { ReactComponent as SvgMoviesTv } from "./movies-tv.svg";
import { ReactComponent as SvgMusic } from "./music.svg";
import { ReactComponent as SvgVideoGames } from "./videogames.svg";

const sectionIconMapper = (mnemocode: string) => {
  const isDark = true;

  switch (mnemocode) {
    case "books":
      return (
        <SvgBooks
          className={
            // TODO проставлять класс в зависимости от темы
            isDark ? "books-color-light" : "books-color-dark"
          }
          width="42px"
          height="40px"
        />
      );
    case "coding":
      return <SvgCoding width="42px" height="40px" />;
    case "movies-tv":
      return <SvgMoviesTv width="42px" height="40px" />;
    case "music":
      return (
        <SvgMusic
          className={
            // TODO проставлять класс в зависимости от темы
            isDark ? "music-color-light" : "music-color-dark"
          }
          width="42px"
          height="40px"
        />
      );
    case "videogames":
      return (
        <SvgVideoGames
          className={
            // TODO проставлять класс в зависимости от темы
            isDark ? "controller-color-light" : "controller-color-dark"
          }
          width="42px"
          height="40px"
        />
      );
    default:
      return null;
  }
};

export { sectionIconMapper };
