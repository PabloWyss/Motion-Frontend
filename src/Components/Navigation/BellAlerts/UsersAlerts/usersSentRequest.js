import denyButton from "../../../../assets/images/denyInv.png"
import acceptButton from "../../../../assets/images/acceptInv.png"
import avatarImage from "../../../../assets/svgs/avatar.svg"
import { AcceptDenyImg, RequestDiv,ImageNameDiv,NameP, FirstNameLastNameDiv,AcceptDenyDiv    } from "../../navigation.style"

const UsersSentRequest = (prop) => {

    return (
        <RequestDiv >
            <ImageNameDiv >
                {prop.requester.avatar?
                <AcceptDenyImg alt="avatar" src={prop.requester.avatar}/>:
                <AcceptDenyImg alt="avatar" src={avatarImage}/>}
                <FirstNameLastNameDiv >
                    <NameP >
                        {prop.requester.first_name} {prop.requester.last_name}
                    </NameP >
                    <NameP >
                        {prop.requester.location}
                    </NameP >

                </FirstNameLastNameDiv >
            </ImageNameDiv >
            <AcceptDenyDiv  >
                <AcceptDenyImg alt="acceptButton" src={acceptButton}/>
                <AcceptDenyImg alt="denybutton" src={denyButton}/>
            </AcceptDenyDiv  >
            
        </RequestDiv >
    )
}

export default UsersSentRequest