import React, { useState } from "react";
import {
  Avatar,
  Name,
  Time,
  PostText,
  HeartIcon,
  ActionButton,
  ShareIcon,
  LikeCount,
  FlexRowWrapper,
  FlexColumnWrapper,
  PictureGrid,
  WrapperDiv,
  HeaderWrapper,
  MainRenderContainer,
  PostImage,
  GridImage,
  SeperatorDiv,
  FooterWrapper,
} from "./postRender.style.js";
import likeHeart from "../../../assets/svgs/heart.svg";
import shareArrow from "../../../assets/svgs/share.svg";
import EditForm from "../../Forms/editForm.js";
import { useSelector } from "react-redux";
import LikePost from "../../LikePost/likePost.js";

const PostRender = (props) => {
  const moreThenOneImage = props.ownPosts.images.length > 1;
  const userData = useSelector((state) => state.currentuser.currentuser)
  // const [editAllow, setEditAllow] = useState(false)
  let editAllow = false
  // console.log(userData.id)
  // console.log(props.ownPosts.user.id)
  

  let avatar = "";
  if (props.ownPosts.user.avatar === null) {
    avatar =
      "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";
  } else {
    avatar = props.ownPosts.user.avatar;
  }

  const handleEditAllow = () => {
    return (userData.id !== props.ownPosts.user.id ? editAllow : (editAllow = !editAllow))
  }

  const handleClickLike = () => {
    LikePost()
  }


  return (
    <MainRenderContainer>
      <WrapperDiv>
        <FlexRowWrapper>
          <Avatar src={avatar} />
          <HeaderWrapper>
            <FlexColumnWrapper>
              <Name>{`${props.ownPosts.user.first_name} ${props.ownPosts.user.last_name}`}</Name>
              <Time>Time</Time>
            </FlexColumnWrapper>
          </HeaderWrapper>
          <EditForm postDetails={props.ownPosts} edit={handleEditAllow()} />
        </FlexRowWrapper>
        <FlexRowWrapper>
          <PostText>{props.ownPosts.content}</PostText>
        </FlexRowWrapper>
        {moreThenOneImage ? (
          <PictureGrid>
            {props.ownPosts.images.map((image) => {
              return <GridImage src={image.image} alt={image.image} />;
            })}
          </PictureGrid>
        ) : (
          props.ownPosts.images.map((image) => {
            return <PostImage src={image.image} alt={image.image} />;
          })
        )}
        <FooterWrapper>
          <HeartIcon src={likeHeart} alt="like heart" />
          <ActionButton>Like</ActionButton>
          <ShareIcon src={shareArrow} alt="share Icon" />
          <ActionButton>Share</ActionButton>
          <SeperatorDiv>
            <LikeCount>{props.ownPosts.amount_of_likes} likes</LikeCount>
          </SeperatorDiv>
        </FooterWrapper>
      </WrapperDiv>
    </MainRenderContainer>
  );
};

export default PostRender;

