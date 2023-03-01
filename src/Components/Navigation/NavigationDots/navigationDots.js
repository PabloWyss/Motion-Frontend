import profileImage from "../../../assets/svgs/ShapeProfileImage.svg"
import logoutImage from "../../../assets/svgs/ShapeLogout.svg"
import { NavigationDotsUl,
    NavigationDotsLi,
    NavigationDotsImg} from "../navigation.style"

const NavigationDots = () => {

    return (
        <NavigationDotsUl>
            <NavigationDotsLi>
                <NavigationDotsImg alt="profileLogo Image" src={profileImage}/>
                <p>Profile</p>
            </NavigationDotsLi>
            <NavigationDotsLi>
                <NavigationDotsImg alt="Logout Image" src={logoutImage}/>
                <p>Logout</p>
            </NavigationDotsLi>
        </NavigationDotsUl>
    )
}

export default NavigationDots