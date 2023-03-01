import denyButton from "../../../../assets/images/denyInv.png"
import acceptButton from "../../../../assets/images/acceptInv.png"
import avatarImage from "../../../../assets/svgs/avatar.svg"
import clock from "../../../../assets/svgs/Groupclock.svg"
import { AcceptDenyImg, RequestDiv,ImageNameDiv,NameP, FirstNameLastNameDiv,AcceptDenyDiv } from "../../navigation.style"

const UsersReceivedRequest = (prop) => {

    return (
        <RequestDiv >
            <ImageNameDiv >
                {prop.receiver.avatar?
                <AcceptDenyImg alt="avatar" src={prop.receiver.avatar}/>:
                <AcceptDenyImg alt="avatar" src={avatarImage}/>}
                <FirstNameLastNameDiv >
                    <NameP >
                        {prop.receiver.first_name} {prop.receiver.last_name}
                    </NameP >
                    <NameP >
                        {prop.receiver.location}
                    </NameP >

                </FirstNameLastNameDiv >
            </ImageNameDiv >
            <AcceptDenyDiv  >
                <AcceptDenyImg alt="clock" src={clock}/>
            </AcceptDenyDiv  >
            
        </RequestDiv >
    )
}

export default UsersReceivedRequest