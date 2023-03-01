import { useEffect } from "react";
import { EditProfileButton, MainContainer } from "./profileCardLeft.style";

function ProfileCardLeft() {
  let userProfile = {};


  useEffect(() => {
    //retrieve user data
  }, [])


  return (
    <MainContainer>
      <p>Profile card left</p>
      <EditProfileButton>EDIT PROFILE</EditProfileButton>
    </MainContainer>
  );
}

export default ProfileCardLeft;
