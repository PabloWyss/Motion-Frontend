import React from "react";
import CreateOwnPost from "../CreateOwnPost/createOwnPost";
import OtherPosts from "../OtherPosts/otherPosts";
import OwnPosts from "../OwnPosts/ownPosts";
import SharedPosts from "../Shared Post/sharedPosts";
import { MainContainer, PageBorder, SideSeperator } from "./postWrapper.style";

const PostWrapper = () => {
  return (
    <MainContainer>
      <PageBorder />
      <SideSeperator>
        <CreateOwnPost />
        <OwnPosts />
      </SideSeperator>
      <SideSeperator>
        <OtherPosts />
        <SharedPosts />
      </SideSeperator>
      <PageBorder />
    </MainContainer>
  );
};

export default PostWrapper;
