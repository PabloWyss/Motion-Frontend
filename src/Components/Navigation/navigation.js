import React, { useState } from "react";
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
  AlertContainer,
  AlertNumDiv,
  AlertNumSpacer,
  AlertNumSpacerAbsolute,
  NavigationDotsDiv,
  NavigationBellDiv
} from "./navigation.style";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/users/jennifer.png";
import menuDots from "../../assets/svgs/menu.svg"
import findFriendLogo from "../../assets/svgs/icon-friends.svg"
import postsLogo from "../../assets/svgs/posts_logo.svg"
import bell from "../../assets/svgs/notification_bell.svg"
import NavigationDots from "./NavigationDots/navigationDots";
import BellAlerts from "./BellAlerts/bellAlerts";

const Navigation = () => {

  const [dotsClicked, setDotsClicked] = useState(false)
  const [bellClicked, setBellClicked] = useState(false)

  const handleDotsClicjed = () => {
    setDotsClicked(!dotsClicked)
  }

  const handleMouseOutOfMenu = () => {
    setDotsClicked(!dotsClicked)
  }

  const handleBellClicked = () => {
    setBellClicked(!bellClicked)
  }

  const handleMouseOutOfBellMenu = () => {
    setBellClicked(!bellClicked)
  }


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
          <AlertIcon src={bell} onClick={handleBellClicked }></AlertIcon>
          <AlertNumSpacerAbsolute>
            <AlertNumSpacer></AlertNumSpacer>
            <AlertNumDiv>
              <AlertNum>3</AlertNum>
            </AlertNumDiv>
          </AlertNumSpacerAbsolute>
          {bellClicked ?
            <NavigationBellDiv onMouseLeave={handleMouseOutOfBellMenu}>
              <BellAlerts/>
            </NavigationBellDiv>:
            ""
          }
        </AlertContainer>
        <Avatar src={avatar}></Avatar>
        <MenuDots src={menuDots} onClick={handleDotsClicjed}></MenuDots>
        {dotsClicked ? 
         <NavigationDotsDiv onMouseLeave={handleMouseOutOfMenu}>
         <NavigationDots/>
       </NavigationDotsDiv> :
       ""}
      </ContainerRight>
    </MainContainer>
  );
};

export default Navigation;
