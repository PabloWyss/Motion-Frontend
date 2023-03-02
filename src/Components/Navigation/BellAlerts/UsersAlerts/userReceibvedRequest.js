import denyButton from "../../../../assets/images/denyInv.png"
import acceptButton from "../../../../assets/images/acceptInv.png"
import avatarImage from "../../../../assets/svgs/avatar.svg"
import clock from "../../../../assets/svgs/Groupclock.svg"
import { AcceptDenyImg, RequestDiv,ImageNameDiv,BellNameP, FirstNameLastNameDiv,AcceptDenyDiv,BellInnerLi } from "../../navigation.style"

const UsersReceivedRequest = (prop) => {
    
    return (
        <BellInnerLi>
            <RequestDiv >
                <ImageNameDiv >
                    {prop.receiver.avatar?
                    <AcceptDenyImg alt="avatar" src={prop.receiver.avatar}/>:
                    <AcceptDenyImg alt="avatar" src={avatarImage}/>}
                    <FirstNameLastNameDiv >
                        <BellNameP >
                            {prop.receiver.first_name} {prop.receiver.last_name}
                        </BellNameP >
                        <BellNameP >
                            {prop.receiver.location}
                        </BellNameP >
                    </FirstNameLastNameDiv >
                </ImageNameDiv >
                <AcceptDenyDiv  >
                    <AcceptDenyImg alt="clock" src={clock}/>
                </AcceptDenyDiv  >
            </RequestDiv >
        </BellInnerLi>
    )
}

export default UsersReceivedRequest