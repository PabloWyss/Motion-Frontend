import Navigation from "../../Components/Navigation/navigation";
import ProfileBackground from "../../Components/UserProfile/ProfileBackground/ProfileBackground";
import ProfileCard from "../../Components/UserProfile/ProfileCard/ProfileCard";
import { ProfilePage } from "./profile.style";

function Profile() {
  return (
    <ProfilePage>
      <Navigation />
      <ProfileBackground />
      <ProfileCard />
    </ProfilePage>
  );
}

export default Profile;
