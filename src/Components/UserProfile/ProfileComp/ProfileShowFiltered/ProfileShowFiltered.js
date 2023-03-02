import { useSelector } from "react-redux";
import LikedPosts from "../../../Social/LikedPosts/likedPosts";
import OwnPosts from "../../../Social/OwnPosts/ownPosts";
import FilteredUsers from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFollowing";
import FilteredUsersFollowers from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFollowers";
import FilteredUsersFriends from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFriends";
import { MainContainer } from "./profileShowFiltered.style";
import FilteredUsersFollowing from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFollowing";

function ProfileShowFiltered() {
  const filter = useSelector((store) => store.profilefilter.profilefilter); //get state from redux

console.log(filter);

  //returns the component to render based on which filter is chosen
  const displayComponent = () => {
    switch (filter) {
      case "posts":
        return <OwnPosts />;
      case "likes":
        return <LikedPosts />;
      case "friends":
        return <FilteredUsersFriends />;
      case "followers":
        return <FilteredUsersFollowers />;
      case "following":
        return <FilteredUsersFollowing />;
      default:
        return <OwnPosts />;
    }
  };

  return (
    <MainContainer>
      <div>{displayComponent()}</div>
    </MainContainer>
  );
}

export default ProfileShowFiltered;
