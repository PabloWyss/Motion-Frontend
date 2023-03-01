import { CardMainContainer, ProfileCardRightContainer } from "./profileCard.style";
import ProfileCardLeft from "./ProfileCardLeft/ProfileCardLeft";
import ProfileCounters from "./ProfileCounters/ProfileCounters";
import ProfileData from "./ProfileData/ProfileData";

function ProfileCard() {
  return (
    <CardMainContainer>
      <ProfileCardLeft />
      <ProfileCardRightContainer>
        <ProfileData />
        <ProfileCounters />
      </ProfileCardRightContainer>
    </CardMainContainer>
  );
}

export default ProfileCard;
