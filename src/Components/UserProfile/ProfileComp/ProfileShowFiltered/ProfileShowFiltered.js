import FindFirendsGrid from "../../../FindFriendsGrid/findfriendsgrid";
import FilteredUsers from "./ProfileFilteredComponents/FilteredUsers/FilteredUsers";
import { MainContainer } from "./profileShowFiltered.style";

function ProfileShowFiltered() {
  let state = "friends"; //get state from redux

  //returns the component to render based on which filter is chosen
  const displayComponent = () => {
    switch (state) {
      case "posts":
        return;
      case "likes":
        return;
      case "friends":
        return <FilteredUsers />;
      case "followers":
        return;
      case "following":
        return;
      default:
        return; // -> posts
    }
  };

  return <MainContainer><div>{displayComponent()}</div></MainContainer>;
}

export default ProfileShowFiltered;
