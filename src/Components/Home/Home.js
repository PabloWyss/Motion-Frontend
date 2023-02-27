import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Home/Homepage";
import "./App.css";
import SignInLeft from "../SignInLeft/signIn";

function Home() {
  return (
    <div className="App">
      <SignInLeft/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default Home;
