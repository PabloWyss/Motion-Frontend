import React, { useEffect } from "react";
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
  HeaderWrapper
} from "./ownPosts.style";
import avatarJennifer from "../../../assets/images/users/jennifer.png";
import { useState } from "react";

const OwnPosts = () => {

  const [ownPosts, setOwnPosts] = useState();
  const Token = localStorage.getItem("auth-token");

  const GetPost_UserId=async(UserId,offset) =>
  {
    //GET: lists all the posts of a specific user in chronological order
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}` );

    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    let posts = []

   await fetch("https://motion.propulsion-home.ch/backend/api/social/posts/user/"+UserId+"/?limit=25&offset="+offset, requestOptions)
      .then(response => response.json())
     .then(result => setOwnPosts(result.results))
     .catch(error => console.log('error', error));
    
  }

  useEffect(() => {
    GetPost_UserId(2230, 0);
    
  },[]) 
  

  

  return (
    
    <MainContainer>
      <WrapperDiv>
        <FlexRowWrapper>
          <Avatar src={avatarJennifer} />
          <HeaderWrapper>
            <FlexColumnWrapper>
              <Name>Name</Name>
              <Time>Time</Time>
            </FlexColumnWrapper>
          </HeaderWrapper>
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
