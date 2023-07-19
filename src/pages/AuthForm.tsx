import { Button, TextLink, Textfield } from "@components/atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginWithCreds } from "api/fakeApi";
import { Helmet } from "react-helmet";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";
import * as yup from "yup";

// Auto redirect to app if user is logged in
const loader = () => {
  // TODO proper auth
  const token = localStorage.getItem("token");

  if (token) {
    return redirect("/sections");
  }

  return null;
};

type Form = {
  login: string;
  password: string;
};

const schema = yup
  .object({
    login: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

interface AuthFormProps {
  type: "login" | "sign-up";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    console.log({ data });

    try {
      const res = await loginWithCreds(data);

      if (res.ok) {
        // TODO temp
        localStorage.setItem("token", res.token);
        navigate("/sections");
      } else {
        // TODO temp
        localStorage.removeItem("token");
        console.error("error from server");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onFormError: SubmitErrorHandler<Form> = (errors) => {
    console.log({ errors });
  };

  return (
    <>
      <Helmet>
        <title>{type === "login" ? "Log in" : "Sign up"}</title>
      </Helmet>
      <div className="w-full h-full flex place-items-center bg-slate-900">
        <main className="m-auto w-full max-w-lg h-2/3 flex place-items-center justify-around py-4 px-24 bg-slate-700 rounded-xl flex-col ">
          <span className="font-bold text-2xl text-slate-100">Forum</span>
          <form
            className="w-full flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit, onFormError)}
          >
            <Textfield
              block
              type="text"
              label="login"
              disabled={isSubmitting}
              {...register("login")}
              error={errors.login?.message}
            />
            <Textfield
              type="password"
              label="password"
              disabled={isSubmitting}
              {...register("password")}
              error={errors.password?.message}
            />
            <div className="w-full pt-4">
              <Button block type="submit" disabled={isSubmitting}>
                {type === "login" ? "Log in" : "Create account"}
              </Button>
            </div>
          </form>
          <div className="flex justify-center gap-1 text-slate-100">
            <span>Already have an account? </span>
            <TextLink to={type === "login" ? "/sign-up" : "/login"}>
              {type === "login" ? "Sign up" : "Log in"}
            </TextLink>
          </div>
          <div className="flex justify-center text-slate-100">
            <TextLink to="/">Back to front page</TextLink>
          </div>
        </main>
      </div>
    </>
  );
};

export default AuthForm;
export { loader };
