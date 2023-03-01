import React from "react";
import CreateOwnPost from "../CreateOwnPost/createOwnPost";
import OtherPosts from "../OtherPosts/otherPosts";
import OwnPosts from "../OwnPosts/ownPosts";
import SharedPosts from "../Shared Post/sharedPosts";
import { MainContainer, SideSeperator } from "./postWrapper.style";

const PostWrapper = () => {
  return (
    <MainContainer>
      <SideSeperator>
        <CreateOwnPost />
        <OwnPosts />
      </SideSeperator>
      <SideSeperator>
        <OtherPosts />
        <SharedPosts />
      </SideSeperator>
    </MainContainer>
  );
};

export default PostWrapper;
