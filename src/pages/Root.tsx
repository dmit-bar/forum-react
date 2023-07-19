import { Button, TextLink } from "@components/atoms";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Root = () => {
  const token = localStorage.getItem("token");

  return (
    <>
      <Helmet>
        <title>Forum</title>
      </Helmet>
      <div className="w-full h-full flex place-items-center bg-stone-900">
        <main className="m-auto w-full max-w-lg h-1/3 flex place-items-center justify-around py-4 px-24 bg-stone-700 rounded-xl flex-col ">
          <span className="font-bold text-2xl text-stone-100">Forum</span>
          <div className="">
            <TextLink to="/sections">{"> Enter <"}</TextLink>
          </div>
          {token ? (
            <>
              <span className="text-stone-100">
                You're currently logged in.
              </span>
            </>
          ) : (
            <>
              <span className="pb-1 text-stone-100">
                You're currently not logged in.
              </span>
              <div className="flex gap-2 text-stone-100">
                <Link to="/sign-up">
                  <Button>Sign up</Button>
                </Link>
                <Link to="/login">
                  <Button view="secondary-default">Log in</Button>
                </Link>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Root;
