import {
  AddFriendlocationP,
  AddFriendNameP,
  AvatarImg,
  EditProfileButton,
  MainContainer,
} from "./OwnProfileInfos.style";
import avatarImage from "../../../../../../assets/svgs/avatar.svg";

function OwnProfileInfos(props) {
  console.log(props.userdata);

  return (
    <MainContainer>
      {props.userdata.avatar ? (
        <AvatarImg alt="avatar" src={props.userdata.avatar} />
      ) : (
        <AvatarImg alt="avatar" src={avatarImage} />
      )}
      <AddFriendNameP>{`${props.userdata.first_name} ${props.userdata.last_name}`}</AddFriendNameP>
      <AddFriendlocationP>{props.userdata.location}</AddFriendlocationP>
      <EditProfileButton>EDIT PROFILE</EditProfileButton>
    </MainContainer>
  );
}

export default OwnProfileInfos;
