import { Fragment } from "react";
import SignInRight from "../../../Components/AuthComp/SignInRight/SignInRight";
import SignInLeft from "../../../Components/SignInLeft/signIn";

function SignIn() {
  return (
    <Fragment>
      <SignInLeft />
      <SignInRight />
    </Fragment>
  );
}

export default SignIn;
