import { useState } from "react";
import callAPI from "../../../axios/auth";
import { useNavigate } from "react-router-dom";

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
    localStorage.setItem('auth-token', response.data.access);
    //redirect to homepage
    navigate("/");
  };


  return (
    <form className="login-form">
      <input placeholder="Email" type="email" value={userEmail} onChange={handleEmailInput} />
      <input
        placeholder="Password"
        type="password"
        value={userPassword}
        onChange={handlePasswordInput}
      />
      <button onClick={handleLoginClick}>Login</button>
    </form>
  );
}

export default SignInRight;
