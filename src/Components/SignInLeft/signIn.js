import { LeftSide,MotionLogoP,ConectMessageP,StoreContainerDiv,StoreIconImg   } from "./signIn.style"
import MotionLogoWhite from "../../assets/images/logo_white.png"
import AppleLogo from "../../assets/svgs/apple.svg"
import GoogleLogo from "../../assets/svgs/google.svg"


const SignInLeft = () => {

    return (
        <LeftSide>
            <div>
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
                    <div>
                        <StoreIconImg src={AppleLogo} alt="Apple Logo"/>
                    </div>
                    <div>
                        <StoreIconImg src={GoogleLogo} alt="Google Logo"/>
                    </div>
                </StoreContainerDiv>
            </div>
            <div>
                <div>
                    <img src ="" alt="Twiter Icon"/>
                    <img src ="" alt="Facebook Icon"/>
                    <img src ="" alt="Instagram Icon"/>
                </div>
                <div>
                    <p>© Motion 2018. All rights reserved. </p>
                </div>
            </div>
        </LeftSide>
    )
}

export default SignInLeft