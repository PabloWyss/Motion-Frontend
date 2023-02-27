import { LeftSide,MotionLogoP,ConectMessageP,StoreContainerDiv,StoreIconImg,StoreIconDiv, 
    SocialLinksImg,DisclaimerP,LogoContainerDiv } from "./signIn.style"
import MotionLogoWhite from "../../assets/images/logo_white.png"
import AppleLogo from "../../assets/svgs/apple.svg"
import GoogleLogo from "../../assets/svgs/google.svg"
import TwitterLogo from "../../assets/svgs/twitter_icon.svg"
import FacebookLogo from "../../assets/svgs/facebook_icon.svg"
import InstagramLogo from "../../assets/svgs/instagram_icon.svg"

const SignInLeft = () => {

    return (
        <LeftSide>
            <LogoContainerDiv>
                <div>
                    <img src={MotionLogoWhite} alt="logo"/>
                    <MotionLogoP >Motion</MotionLogoP >
                </div>
                <div>
                    <ConectMessageP >
                        Connect with friends and the world around you with Motion.
                    </ConectMessageP >
                </div>
                <StoreContainerDiv>
                    <StoreIconDiv>
                        <StoreIconImg src={AppleLogo} alt="Apple Logo"/>
                    </StoreIconDiv>
                    <StoreIconDiv>
                        <StoreIconImg src={GoogleLogo} alt="Google Logo"/>
                    </StoreIconDiv>
                </StoreContainerDiv>
            </LogoContainerDiv>
            <div>
                <div>
                    <SocialLinksImg src ={TwitterLogo} alt="Twiter Icon"/>
                    <SocialLinksImg src ={FacebookLogo} alt="Facebook Icon"/>
                    <SocialLinksImg src ={InstagramLogo} alt="Instagram Icon"/>
                </div>
                <div>
                    <DisclaimerP>© Motion 2018. All rights reserved. </DisclaimerP>
                </div>
            </div>
        </LeftSide>
    )
}

export default SignInLeft