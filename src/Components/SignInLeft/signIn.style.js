import styled from "styled-components";
import backgroundImage from "../../assets/images/background_image.png"


export const LeftSide = styled.div `
    height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: url(${backgroundImage}), linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    background-blend-mode: multiply, normal;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    background-size: cover;
    font-family: 'Roboto';
    font-style: normal;
    text-align: center;
    letter-spacing: 0.75px;
    color: white;
`

export const LogoContainerDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 30px;
`

export const MotionLogoP = styled.p `
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;

`

export const StoreContainerDiv = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
`

export const ConectMessageP = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    mix-blend-mode: normal;
    opacity: 0.6;       
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
`

export const DisclaimerP = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

`



