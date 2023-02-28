import React from "react";
import CreateOwnPost from "../CreateOwnPost/createOwnPost";
import OtherPosts from "../OtherPosts/otherPosts";
import OwnPosts from "../OwnPosts/ownPosts";
import SharedPosts from "../Shared Post/sharedPosts";
import { MainContainer } from "./postWrapper.style";

const PostWrapper = () => {
  return (
    <MainContainer>
      <div>
        <CreateOwnPost />
        <OwnPosts />
      </div>
      <div>
        <OtherPosts />
        <SharedPosts />
      </div>
    </MainContainer>
  );
};

export default PostWrapper;
