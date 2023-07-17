import { TextLink } from "@components/atoms";
import { Outlet } from "react-router-dom";

const Forum = () => {
  return (
    <div className="w-full h-full">
      <div className="w-2/3 h-full m-auto border-x border-slate-950 flex flex-col">
        <header className="px-2 py-1 border-b border-slate-950 text-xl">
          <TextLink to={"/"}>Forum</TextLink>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="px-2 py-1 border-t border-slate-950">
          <span>footer</span>
        </footer>
      </div>
    </div>
  );
};

export { Forum };
