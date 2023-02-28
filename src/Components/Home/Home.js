import { Route, Routes } from "react-router-dom";
import Congratulations from "../../pages/AuthProcess/Congratulations/Congratulations";
import SignIn from "../../pages/AuthProcess/SignIn/SignIn";
import SignUp from "../../pages/AuthProcess/SignUp/SignUp";
import Verification from "../../pages/AuthProcess/Verification/Verification";
import Homepage from "../../pages/Home/Homepage";
import Posts from "../../pages/Posts/posts";
import Profile from "../../pages/Profile/Profile";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default Home;
