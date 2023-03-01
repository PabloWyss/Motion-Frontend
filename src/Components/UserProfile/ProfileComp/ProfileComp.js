import ProfileCard from "./ProfileCard/ProfileCard";
import { ProfileCompContainer } from "./profileComp.style";
import ProfileShowFiltered from "./ProfileShowFiltered/ProfileShowFiltered";

function ProfileComp() {
  return (
    <ProfileCompContainer>
      <ProfileCard />
      <ProfileShowFiltered />
    </ProfileCompContainer>
  );
}

export default ProfileComp;
