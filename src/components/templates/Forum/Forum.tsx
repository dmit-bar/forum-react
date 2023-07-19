import { TextLink } from "@components/atoms";
import { Outlet } from "react-router-dom";

const Forum = () => {
  return (
    <div className="w-full h-full bg-stone-900">
      <div className="w-2/3 h-full m-auto flex flex-col gap-1">
        <header className="px-2 py-1 bg-stone-700 text-xl rounded-b-md">
          <TextLink to={"/"}>Forum</TextLink>
        </header>
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-stone-700 rounded-md">
          <Outlet />
        </main>
        <footer className="px-2 py-1 text-stone-100 bg-stone-700 rounded-t-md">
          <span>footer</span>
        </footer>
      </div>
    </div>
  );
};

export { Forum };
