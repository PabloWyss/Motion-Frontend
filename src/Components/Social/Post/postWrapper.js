import React from "react";
import CreateOwnPost from "../CreateOwnPost/createOwnPost";
import OtherPosts from "../OtherPosts/otherPosts";
import OwnPosts from "../OwnPosts/ownPosts";
import SharedPosts from "../Shared Post/sharedPosts";
import { MainContainer,  SideSeperatorLeft, SideSeperatorRight } from "./postWrapper.style";

const PostWrapper = () => {
  return (
    <MainContainer>
      <SideSeperatorLeft>
        <CreateOwnPost />
        <OwnPosts />
      </SideSeperatorLeft>
      <SideSeperatorRight>
        <OtherPosts />
      </SideSeperatorRight>
    </MainContainer>
  );
};

export default PostWrapper;
