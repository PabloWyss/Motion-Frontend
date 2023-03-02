import { useSelector } from "react-redux";
import OwnPosts from "../../../Social/OwnPosts/ownPosts";
import FilteredUsers from "./ProfileFilteredComponents/FilteredUsers/FilteredUsers";
import { MainContainer } from "./profileShowFiltered.style";

function ProfileShowFiltered() {
  const filter = useSelector((store) => store.profilefilter.profilefilter); //get state from redux

  //returns the component to render based on which filter is chosen
  const displayComponent = () => {
    switch (filter) {
      case "posts":
        return <OwnPosts />;
      case "likes":
      //return <LikedPosts />;
      case "friends":
        return <FilteredUsers filter={"friends"} />;
      case "followers":
        return <FilteredUsers filter={"followers"} />;
      case "following":
        return <FilteredUsers filter={"following"} />;
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
