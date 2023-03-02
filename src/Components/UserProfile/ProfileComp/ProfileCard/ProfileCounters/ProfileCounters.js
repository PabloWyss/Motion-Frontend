import { useDispatch } from "react-redux";
import { setProfileFilter } from "../../../../../redux/slices/profileFilter";
import {
  MainContainer,
  ProfileCounterAmount,
  ProfileCounterDiv,
  ProfileCounterTag,
} from "./profileCounters.style";

function ProfileCounters(props) {
  const dispatch = useDispatch();

  //updates redux store to change view
  const handleOnClickPosts = () => {
    dispatch(setProfileFilter("posts"));
  };

  const handleOnClickLikes = () => {
    dispatch(setProfileFilter("likes"));
  };

  const handleOnClickFriends = () => {
    dispatch(setProfileFilter("friends"));
  };

  const handleOnClickFollowers = () => {
    dispatch(setProfileFilter("followers"));
  };

  const handleOnClickFollowing = () => {
    dispatch(setProfileFilter("following"));
  };



  return (
    <MainContainer>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_posts}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickPosts}>
          Posts
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_likes}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickLikes}>
          Likes
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_friends}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickFriends}>
          Friends
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_followers}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickFollowers}>
          Followers
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_following}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickFollowing}>
          Following
        </ProfileCounterTag>
      </ProfileCounterDiv>
    </MainContainer>
  );
}

export default ProfileCounters;
