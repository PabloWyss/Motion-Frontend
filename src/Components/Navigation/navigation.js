import React from "react";
import {
  Logo,
  MainContainer,
  PageTitle,
  PostsSection,
  FindFriendsSection,
  AlertIcon,
  Avatar,
  MenuDots, 
  PostLogo, 
  FindFriendsLogo,
  NavText,
  ContainerLeft,
  ContainerRight,
  AlertNum,
  AlertContainer
} from "./navigation.style";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/users/jennifer.png";
import menuDots from "../../assets/svgs/menu.svg"
import findFriendLogo from "../../assets/svgs/icon-friends.svg"
import postsLogo from "../../assets/svgs/posts_logo.svg"
import bell from "../../assets/svgs/notification_bell.svg"

const Navigation = () => {
  return (
    <MainContainer>
      <ContainerLeft>
        <Logo src={logo}></Logo>
        <PageTitle>Motion</PageTitle>
        <PostsSection>
          <PostLogo src={postsLogo}></PostLogo>
          <NavText>Posts</NavText>
        </PostsSection>
        <FindFriendsSection>
          <FindFriendsLogo src={findFriendLogo}></FindFriendsLogo>
          <NavText>Find Friends</NavText>
        </FindFriendsSection>
      </ContainerLeft>
      <ContainerRight>
        <AlertContainer>
          <AlertIcon src={bell}></AlertIcon>
          <AlertNum>3</AlertNum>
        </AlertContainer>
        <Avatar src={avatar}></Avatar>
        <MenuDots src={menuDots}></MenuDots>
      </ContainerRight>
    </MainContainer>
  );
};

export default Navigation;
