import { Fragment } from "react";
import SignInRight from "../../../Components/AuthComp/SignInRight/SignInRight";
import SignInLeft from "../../../Components/SignInLeft/signIn";
import { SignInDiv } from "./SignIn.style";

function SignIn() {
  return (
    <Fragment>
      <SignInDiv>
        <SignInLeft />
        <SignInRight />
      </SignInDiv>
    </Fragment>
  );
}

export default SignIn;
