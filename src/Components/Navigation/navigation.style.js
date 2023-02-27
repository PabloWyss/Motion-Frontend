import styled from "styled-components";

export const MainContainer = styled.div`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
`;

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: felx-start;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const Logo = styled.img`
  height: 26px;
  width: 26px;
  margin-right: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 3.744px;
  margin-left: 40px;
`;

export const PageTitle = styled.h1`
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
`;
export const PostsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`;

export const FindFriendsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`;

export const NavText = styled.p`
  height: 19px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const PostLogo = styled.img`
  margin: 0 10px 0 85px;
  
`;
export const FindFriendsLogo = styled.img`
  margin: 0 10px 0 30px;
`;

export const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AlertIcon = styled.img`
margin: 0 45px 0 10px;
height: 21px;
`;
export const AlertNum = styled.p`
  background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  position: fixed;
  border-radius: 50%;
  padding: 3px 7px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  top: 0;
  right: 136px;
  opacity: 40%;

  

`

export const Avatar = styled.img`
margin: 0 25px 0 10px;
width: 35px;
`;

export const MenuDots = styled.img`
margin: 0 40px 0 0;
`;
