import denyButton from "../../../../assets/svgs/ButtonDenyRequest.svg"
import acceptButton from "../../../../assets/svgs/ButtonButtonAcceptR.svg"
import checkMark from "../../../../assets/svgs/Ticker.svg"
import cross from "../../../../assets/svgs/Shapecross.svg"

const UsersSentRequest = (prop) => {

    console.log(prop.requester)

    return (
        <div>
            <img alt="avatar" src=""/>
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