import { useState } from "react";
import { useNavigate } from "react-router-dom";
import callAPI from "../../../axios/auth";
import AvatarIcon from "../../../assets/svgs/avatar.svg";
import PasswordIcon from "../../../assets/svgs/password.svg";

import {
  AuthForm,
  FormIcon,
  FormTitle,
  HeaderButton,
  InputContainer,
  InputField,
  RightSide,
  SignInButton,
  SignInHeader,
  TextBesidesButton,
} from "./signInRight.style";

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

  //navigate to sign up page
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <RightSide>
      <SignInHeader>
        <TextBesidesButton>Don't have an account?</TextBesidesButton>
        <HeaderButton onClick={handleSignUpClick}>SIGN UP</HeaderButton>
      </SignInHeader>
      <AuthForm>
        <FormTitle>Sign In</FormTitle>
        <InputContainer>
          <FormIcon src={AvatarIcon}></FormIcon>
          <InputField
            placeholder="Email"
            type="email"
            value={userEmail}
            onChange={handleEmailInput}
          />
        </InputContainer>
        <InputContainer>
          <FormIcon src={PasswordIcon} alt="Password icon" />
          <InputField
            placeholder="Password"
            type="password"
            value={userPassword}
            onChange={handlePasswordInput}
          />
        </InputContainer>
        <SignInButton onClick={handleLoginClick}>SIGN IN</SignInButton>
      </AuthForm>
    </RightSide>
  );
}

export default SignInRight;
