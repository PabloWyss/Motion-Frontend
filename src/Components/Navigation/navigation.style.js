import styled from "styled-components";

export const MainContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  background-color: #FFF;
  
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
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 3.744px;
  margin: 0 15px 0 40px ;
`;

export const PageTitle = styled.h1`
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  margin-right : 85px;
  
`;
export const PostsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  border-bottom: 2px solid transparent;
  
  &:hover{
    border-bottom: 2px solid #AD73FD;
  }
`;

export const FindFriendsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  margin-left: 30px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ad73fd;
  }
`;

export const NavText = styled.p`
  height: 19px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const PostLogo = styled.img`
  margin: 0 10px 0 0px;
  height: 1.1rem;
  
`;
export const FindFriendsLogo = styled.img`
  margin: 0 10px 0 0px;
  height: 1.1rem;
  width: 1.3rem;
`;

export const AlertContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:  100%;
`;
export const AlertIcon = styled.img`
margin: 0 45px 0 10px;
height: 16px;
`;

export const AlertNumSpacerAbsolute = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 50px;
`
export const AlertNumSpacer = styled.div`
  position: relative;
  height: 8px;
`

export const AlertNumDiv = styled.div`
  background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  color: white;
  opacity: 40%;
  /* position: absolute; */
  /* top: 9px */

  
  `
export const AlertNum = styled.span`
  font-size: 11px;
  font-weight: bold;
`

export const Avatar = styled.img`
margin: 0 25px 0 10px;
width: 35px;
`;

export const MenuDots = styled.img`
margin: 0 2.5rem 0 0;
`;

export const NavigationDotsDiv = styled.div`
  position: absolute;
  right: 1rem;
  top: 5rem;
`

export const NavigationDotsUl = styled.ul `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  width: 7rem;
  background-color: white;
`

export const NavigationDotsLi = styled.li `
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
  margin: 0;
  border: solid 1px #d8d3d3;
  &:hover{
    background-color: #d8d3d3;
  }
`

export const NavigationDotsImg = styled.img `
  opacity: .4;
`
