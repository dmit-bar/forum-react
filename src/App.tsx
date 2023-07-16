import { Forum } from "@components/templates";
import AuthForm, { loader as authLoader } from "@pages/AuthForm";
import Root from "@pages/Root";
import ErrorPage from "@pages/error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
      { path: "/sections", element: <div>sections</div> },
      { path: "/settings", element: <div>settings</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
