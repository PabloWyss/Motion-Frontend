import React from "react";
import {
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
  HeaderWrapper,
  MainRenderContainer,
  PostImage,
  GridImage,
  SeperatorDiv,
  FooterWrapper,
} from "./postRender.style.js";
import menuDots from "../../../assets/svgs/menu.svg";
import likeHeart from "../../../assets/svgs/heart.svg";
import shareArrow from "../../../assets/svgs/share.svg";

const PostRender = (props) => {
  const moreThenOneImage = props.ownPosts.images.length > 1;

  let avatar = "";
  if (props.ownPosts.user.avatar === null) {
    avatar =
      "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";
  } else {
    avatar = props.ownPosts.user.avatar;
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
          <Menu src={menuDots} alt="MenuDots"></Menu>
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

