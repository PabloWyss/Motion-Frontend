import { useState } from "react";
import { useNavigate } from "react-router-dom";
import callAPI from "../../../axios/auth";

function SignUpRight() {
  const [userEmail, setEmail] = useState("");
  const navigate = useNavigate();

  //store typed email
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  //sign up - create a new user
  const handleSignUpClick = async (e) => {
    e.preventDefault();
    //redirect to activation page
    navigate("/activation"); //TODO implement confirmation step
    //registration request to API
    await callAPI.post(
      "registration/",
      JSON.stringify({
        email: userEmail,
      })
    );
  };

  return (
    <form>
      <input placeholder="Email" type="email" value={userEmail} onChange={handleEmailInput} />
      <button onClick={handleSignUpClick}>SIGN UP</button>
    </form>
  );
}

export default SignUpRight;
