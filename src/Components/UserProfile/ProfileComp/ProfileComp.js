import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setCurrentUser } from "../../../redux/slices/currentUser";
import ProfileCard from "./ProfileCard/ProfileCard";
import { ProfileCompContainer } from "./profileComp.style";
import ProfileShowFiltered from "./ProfileShowFiltered/ProfileShowFiltered";

function ProfileComp() {
  //let userdata = JSON.parse(localStorage.getItem("user"))
  const [userdata, setUserdata] = useState(JSON.parse(localStorage.getItem("user")));

  //handle passing of user ID via URL
  const userID = useParams().profileId;
  //retrieve userdata of passed user
  const GetUserByID = async () => {
    const Token = localStorage.getItem("auth-token");
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    await fetch("https://motion.propulsion-home.ch/backend/api/users/" + userID, requestOptions)
      .then((response) => response.json())
      .then((result) => setUserdata(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    GetUserByID();
  }, []);

  //console.log(userdata)

  //update userdata of current user
  const dispatch = useDispatch();
  const GetUsers_me = async () => {
    const Token = localStorage.getItem("auth-token");
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    await fetch("https://motion.propulsion-home.ch/backend/api/users/me/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(setCurrentUser(result));
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    GetUsers_me();
  }, []);

  //retrieve data of current user or keep data of passed user


  return (
    <ProfileCompContainer>
      <ProfileCard userdata={userdata} />
      <ProfileShowFiltered />
    </ProfileCompContainer>
  );
}

export default ProfileComp;
