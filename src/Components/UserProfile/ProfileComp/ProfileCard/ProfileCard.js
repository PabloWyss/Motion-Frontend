import { CardMainContainer, ProfileCardRightContainer } from "./profileCard.style";
import ProfileCardLeft from "./ProfileCardLeft/ProfileCardLeft";
import ProfileCounters from "./ProfileCounters/ProfileCounters";
import ProfileData from "./ProfileData/ProfileData";

function ProfileCard(props) {
  return (
    <CardMainContainer>
      <ProfileCardLeft userdata={props.userdata} />
      <ProfileCardRightContainer>
        <ProfileData />
        <ProfileCounters />
      </ProfileCardRightContainer>
    </CardMainContainer>
  );
}

export default ProfileCard;
