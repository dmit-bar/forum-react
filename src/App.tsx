import AuthForm from "@pages/AuthForm";
import Root from "@pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <AuthForm key="login" type="login" />,
  },
  {
    path: "/sign-up",
    element: <AuthForm key="sign-up" type="sign-up" />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
