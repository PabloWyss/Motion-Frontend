import { Route, Routes } from "react-router-dom";
import SignIn from "../../pages/AuthProcess/SignIn/SignIn";
import SignUp from "../../pages/AuthProcess/SignUp/SignUp";
import Verification from "../../pages/AuthProcess/Verification/Verification";
import Homepage from "../../pages/Home/Homepage";
import Posts from "../../pages/Posts/posts";
import "./App.css";
import FindFirends from "../../pages/Find-Friends/find-firends";

function Home() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/find-friends" element={<FindFirends/>} />
      </Routes>
    </div>
  );
}

export default Home;
