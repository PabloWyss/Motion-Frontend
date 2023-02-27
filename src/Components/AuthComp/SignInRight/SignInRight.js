import { useState } from "react";
import { useNavigate } from "react-router-dom";
import callAPI from "../../../axios/auth";

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
    <section>
      <div>
        <span>Don't have an account?</span>
        <button>SIGN UP</button>
      </div>

      <div>
        <form>
          <h2>Sign In</h2>
          <input placeholder="Email" type="email" value={userEmail} onChange={handleEmailInput} />
          <input
            placeholder="Password"
            type="password"
            value={userPassword}
            onChange={handlePasswordInput}
          />
          <button onClick={handleLoginClick}>SIGN IN</button>
        </form>
      </div>
    </section>
  );
}

export default SignInRight;
