import profileImage from "../../../assets/svgs/ShapeProfileImage.svg"
import logoutImage from "../../../assets/svgs/ShapeLogout.svg"
import { NavigationDotsUl,
    NavigationDotsLi,
    NavigationDotsImg} from "../navigation.style"
import { useNavigate } from "react-router-dom";

const NavigationDots = () => {

    const navigate = useNavigate()
    const handleClickProfile = () => {
        navigate("/profile")
    }

    const handleClickLogout = () => {
        localStorage.removeItem("auth-token")
        navigate("/signin")
    }

    return (
        <NavigationDotsUl>
            <NavigationDotsLi onClick={handleClickProfile}>
                <NavigationDotsImg alt="profileLogo Image" src={profileImage}/>
                <p>Profile</p>
            </NavigationDotsLi>
            <NavigationDotsLi onClick={handleClickLogout}>
                <NavigationDotsImg alt="Logout Image" src={logoutImage}/>
                <p>Logout</p>
            </NavigationDotsLi>
        </NavigationDotsUl>
    )
}

export default NavigationDots