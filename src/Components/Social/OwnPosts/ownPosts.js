import React from "react";
import {
  MainContainer,
  Avatar,
  Name,
  Time,
  PostText,
  HeartIcon,
  ActionButton,
  ShareIcon,
  LikeCount,
  Menu,
  FlexRowWrapper,
  FlexColumnWrapper,
  PictureGrid,
  WrapperDiv,
  TextWrapper
} from "./ownPosts.style";
import avatarJennifer from "../../../assets/images/users/jennifer.png";

const OwnPosts = () => {


  
  return (
    <MainContainer>
      <WrapperDiv>
        <FlexRowWrapper>
          <Avatar src={avatarJennifer} />
          <TextWrapper>
          <FlexColumnWrapper>
            <Name>Name</Name>
            <Time>Time</Time>
          </FlexColumnWrapper>
          </TextWrapper>
          <Menu>Menu</Menu>
        </FlexRowWrapper>
        <PostText>Text</PostText>
        <PictureGrid>PictureGrid</PictureGrid>
        <FlexRowWrapper>
          <HeartIcon>Heart</HeartIcon>
          <ActionButton>Like Text</ActionButton>
          <ShareIcon>SharePic</ShareIcon>
          <ActionButton>Share Text</ActionButton>
          <LikeCount>CountLikes</LikeCount>
        </FlexRowWrapper>
      </WrapperDiv>
    </MainContainer>
  );
};

export default OwnPosts;
