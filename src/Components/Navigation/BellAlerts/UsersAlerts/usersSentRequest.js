import denyButton from "../../../../assets/svgs/ButtonDenyRequest.svg"
import acceptButton from "../../../../assets/svgs/ButtonButtonAcceptR.svg"
import checkMark from "../../../../assets/svgs/Ticker.svg"
import cross from "../../../../assets/svgs/Shapecross.svg"
import avatarImage from "../../../../assets/svgs/avatar.svg"

const UsersSentRequest = (prop) => {

    return (
        <div>
            {prop.requester.avatar?
            <img alt="avatar" src={prop.requester.avatar}/>:
            <img alt="avatar" src={avatarImage}/>}
            <div>
                <p>
                    {prop.requester.first_name} {prop.requester.last_name}
                </p>
                <p>
                    {prop.requester.location}
                </p>
            </div>
            <img alt="acceptButton" src={acceptButton}/>
            <img alt="checkMark" src={checkMark}/>
            <img alt="denybutton" src={denyButton}/>
            <img alt="cross" src={cross}/>
            
        </div>
    )
}

export default UsersSentRequest