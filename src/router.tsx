import { Forum } from "@components/templates";
import AuthForm, { loader as authLoader } from "@pages/AuthForm";
import Root from "@pages/Root";
import { Topics } from "@pages/Topics";
import ErrorPage from "@pages/error";
import { createBrowserRouter } from "react-router-dom";
import { Sections } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    loader: authLoader,
    element: <AuthForm key="login" type="login" />,
  },
  {
    path: "/sign-up",
    loader: authLoader,
    element: <AuthForm key="sign-up" type="sign-up" />,
  },
  {
    element: <Forum />,
    children: [
      { path: "/sections", element: <Sections /> },
      { path: "/sections/:id", element: <Topics /> },
      { path: "/settings", element: <div>settings</div> },
    ],
  },
]);

export { router };
