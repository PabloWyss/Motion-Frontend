import {
  MainContainer,
  ProfileCounterAmount,
  ProfileCounterDiv,
  ProfileCounterTag,
} from "./profileCounters.style";

function ProfileCounters(props) {
  return (
    <MainContainer>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_posts}</ProfileCounterAmount>
        <ProfileCounterTag>Posts</ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_likes}</ProfileCounterAmount>
        <ProfileCounterTag>Likes</ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_friends}</ProfileCounterAmount>
        <ProfileCounterTag>Friends</ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_followers}</ProfileCounterAmount>
        <ProfileCounterTag>Followers</ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_following}</ProfileCounterAmount>
        <ProfileCounterTag>Following</ProfileCounterTag>
      </ProfileCounterDiv>
    </MainContainer>
  );
}

export default ProfileCounters;
