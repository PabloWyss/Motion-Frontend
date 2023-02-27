import styled from "styled-components";
import backgroundImage from "../../assets/images/background_image.png"


export const LeftSide = styled.div `
    height: 100vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: url(${backgroundImage}), linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    background-blend-mode: multiply, normal;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    background-size: cover;
    font-style: normal;
    text-align: center;
    letter-spacing: 0.75px;
    color: white;
    gap: 15%;
`

export const LogoContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    justify-content: flex-end;
    gap: 5%;
`

export const LogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const MotionLogoP = styled.p `
    font-weight: 500;
    font-size: 30px;
    margin: 0;
    
`

export const StoreContainerDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 5%;
`

export const ConectMessageP = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    mix-blend-mode: normal;
    opacity: 0.6;   
    margin : 0px;
`

export const StoreIconImg = styled.img `
    width: 78.29px;
    height: 17.35px;    
   
`

export const StoreIconDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 98.29px;
    height: 37.35px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;

`

export const SocialLinksImg = styled.img`
    width: 40px;
    height: 40px;
    opacity: 0.5;
`

export const DisclaimerP = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin: 0px;
`

export const SocialLinksContainterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20%;
    height: 20%;
`

export const SocialLinksDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 20%;
`



