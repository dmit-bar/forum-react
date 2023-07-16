import { Button, TextLink } from "@components/atoms";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full h-full flex place-items-center bg-slate-50">
      <main className="m-auto w-full max-w-lg h-1/3 flex place-items-center py-4 px-24 bg-slate-50 border-2 rounded-xl border-slate-950 flex-col ">
        <span className="font-bold text-2xl pt-8">Forum</span>
        <div className="my-auto">
          <TextLink to="/sections">{"> Enter <"}</TextLink>
        </div>
        <span className="pb-1">You're currently not logged in.</span>
        <div className="flex gap-2 pb-16">
          <Link to="/sign-up">
            <Button>Sign up</Button>
          </Link>
          <Link to="/login">
            <Button view="secondary-default">Log in</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Root;
