import { useEffect } from "react";
import { EditProfileButton, MainContainer } from "./profileCardLeft.style";

function ProfileCardLeft(props) {
 //1. check if user passed is the same as current user
 //2. same as current: display own (edit button)
 //3. other user: display pablo's component 
 
  //let userProfile = {};




  useEffect(() => {
    //retrieve current user id
  }, [])


  return (
    <MainContainer>
      <p>Profile card left</p>
      <EditProfileButton>EDIT PROFILE</EditProfileButton>
    </MainContainer>
  );
}

export default ProfileCardLeft;
