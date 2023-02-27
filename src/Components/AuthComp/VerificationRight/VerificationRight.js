import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import callAPI from "../../../axios/auth";

function VerificationRight() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  //store typed email
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  //store typed password
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  //store typed repeat password
  const handleRepeatPasswordInput = (e) => {
    setRepeatPassword(e.target.value);
  };

  //check if passwords match
  useEffect(() => {
    checkPasswordMatch();
  }, [repeatPassword, userPassword]);

  const checkPasswordMatch = () => {
    if (repeatPassword !== "" && repeatPassword !== userPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  //store typed username
  const handleUserNameInput = (e) => {
    setUserName(e.target.value);
  };

  //store typed firstname
  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  //store typed lastname
  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };

  //store typed verification code
  const handleVerificationCodeInput = (e) => {
    setVerificationCode(e.target.value);
  };

  //validation
  const handleActivateClick = async (e) => {
    e.preventDefault();
    //redirect to login page
    navigate("/login");
    //registration request to API
    await callAPI.patch(
      "registration/validation/",
      JSON.stringify({
        email: userEmail,
        username: userName,
        code: verificationCode,
        password: userPassword,
        password_repeat: repeatPassword,
        first_name: firstName,
        last_name: lastName,
      })
    );
  };

  return (
    <form className="activation-form">
      <input placeholder="Email" type="email" value={userEmail} onChange={handleEmailInput} />
      <input placeholder="Username" value={userName} onChange={handleUserNameInput} />
      <input placeholder="First Name" value={firstName} onChange={handleFirstNameInput} />
      <input placeholder="Last Name" value={lastName} onChange={handleLastNameInput} />
      <input
        placeholder="Verification Code"
        value={verificationCode}
        onChange={handleVerificationCodeInput}
      />
      <input
        placeholder="Password"
        type="password"
        value={userPassword}
        onChange={handlePasswordInput}
      />
      <input
        placeholder="Repeat Password"
        type="password"
        value={repeatPassword}
        onChange={handleRepeatPasswordInput}
      />
      <p style={passwordMatch ? { visibility: "hidden" } : { visibility: "visible" }}>
        The passwords don't match
      </p>

      <button onClick={handleActivateClick}>Activate User Account</button>
    </form>
  );
}

export default VerificationRight;
