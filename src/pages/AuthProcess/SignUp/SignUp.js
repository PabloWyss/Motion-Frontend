import { Fragment } from "react";
import SignUpRight from "../../../Components/AuthComp/SignUpRight/SignUpRight";
import SignInLeft from "../../../Components/SignInLeft/signIn";

function SignUp() {
  return (
    <Fragment>
      <SignInLeft />
      <SignUpRight />
    </Fragment>
  );
}

export default SignUp;
