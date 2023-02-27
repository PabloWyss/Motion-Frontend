import { useState } from "react";
import { useNavigate } from "react-router-dom";
import callAPI from "../../../axios/auth";
import { AuthForm, FormTitle, HeaderButton, InputField, RightSide, SignInButton, SignInHeader, TextBesidesButton } from "./signInRight.style";

function SignInRight() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const navigate = useNavigate();

  //store typed email
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  //store typed password
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  //login
  const handleLoginClick = async (e) => {
    e.preventDefault();
    //registration request to API
    const response = await callAPI.post(
      "token/",
      JSON.stringify({
        email: userEmail,
        password: userPassword,
      })
    );
    localStorage.setItem("auth-token", response.data.access);
    //redirect to homepage
    navigate("/");
  };

  return (
    <RightSide>
      <SignInHeader>
        <TextBesidesButton>Don't have an account?</TextBesidesButton>
        <HeaderButton>SIGN UP</HeaderButton>
      </SignInHeader>
      <AuthForm>
        <FormTitle>Sign In</FormTitle>
        <InputField placeholder="Email" type="email" value={userEmail} onChange={handleEmailInput} />
        <InputField
          placeholder="Password"
          type="password"
          value={userPassword}
          onChange={handlePasswordInput}
        />
        <SignInButton onClick={handleLoginClick}>SIGN IN</SignInButton>
      </AuthForm>
    </RightSide>
  );
}

export default SignInRight;
