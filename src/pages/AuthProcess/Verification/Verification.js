import { Fragment } from "react";
import VerificationRight from "../../../Components/AuthComp/VerificationRight/VerificationRight";
import SignInLeft from "../../../Components/SignInLeft/signIn";

function Verification() {
  return (
    <Fragment>
      <SignInLeft />
      <VerificationRight />
    </Fragment>
  );
}

export default Verification;
