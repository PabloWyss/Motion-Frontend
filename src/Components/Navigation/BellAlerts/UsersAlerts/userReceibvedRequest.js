import denyButton from "../../../../assets/images/denyInv.png"
import acceptButton from "../../../../assets/images/acceptInv.png"
import avatarImage from "../../../../assets/svgs/avatar.svg"
import { AcceptDenyImg, RequestDiv,ImageNameDiv, NameP  } from "../../navigation.style"

const UsersReceivedRequest = (prop) => {
    console.log(prop.receiver)

    return (
        <RequestDiv >
            <ImageNameDiv >
                {prop.receiver.avatar?
                <AcceptDenyImg alt="avatar" src={prop.receiver.avatar}/>:
                <AcceptDenyImg alt="avatar" src={avatarImage}/>}
                <div>
                    <NameP >
                        {prop.receiver.first_name} {prop.receiver.last_name}
                    </NameP >
                    <NameP >
                        {prop.receiver.location}
                    </NameP >

                </div>
            </ImageNameDiv >
            <div>
                <AcceptDenyImg alt="acceptButton" src={acceptButton}/>
                <AcceptDenyImg alt="denybutton" src={denyButton}/>
            </div>
        </RequestDiv >
    )
}

export default UsersReceivedRequest