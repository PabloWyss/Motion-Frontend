import { useSelector } from "react-redux";
import ProfileCard from "./ProfileCard/ProfileCard";
import { ProfileCompContainer } from "./profileComp.style";
import ProfileShowFiltered from "./ProfileShowFiltered/ProfileShowFiltered";

function ProfileComp() {
  //TODO implement passing of user from other component or page
  //here just retrieves current user
  const userdata = JSON.parse(localStorage.getItem("user"));

  return (
    <ProfileCompContainer>
      <ProfileCard userdata={userdata} />
      <ProfileShowFiltered />
    </ProfileCompContainer>
  );
}

export default ProfileComp;
