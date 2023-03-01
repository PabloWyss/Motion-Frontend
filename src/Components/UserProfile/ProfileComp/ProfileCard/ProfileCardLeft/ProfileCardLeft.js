//import { useSelector } from "react-redux";
import UserFindFriendInfo from "../../../../FindFriendsGrid/UserFindFriendInfo/userFindFriendIndo";
import OwnProfileInfos from "./OwnProfileInfos/OwnProfileInfos";

function ProfileCardLeft(props) {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  //retrieving of current user from redux doesn't work
  //const currentUser = useSelector((store) => store.currentuser);

  //check if user passed is the same as current user
  //and render the corresponding component
  const displayContent = () => {
    return props.userdata.id === currentUser.id ? (
      <OwnProfileInfos userdata={props.userdata} />
    ) : (
      <UserFindFriendInfo />
    );
  };

  return displayContent();
}

export default ProfileCardLeft;
