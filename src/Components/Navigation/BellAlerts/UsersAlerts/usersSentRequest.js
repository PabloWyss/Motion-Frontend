import denyButton from "../../../../assets/images/denyInv.png"
import acceptButton from "../../../../assets/images/acceptInv.png"
import avatarImage from "../../../../assets/svgs/avatar.svg"
import { AcceptDenyImg, RequestDiv,ImageNameDiv,NameP, FirstNameLastNameDiv,AcceptDenyDiv    } from "../../navigation.style"

const UsersSentRequest = (prop) => {

    const Token = localStorage.getItem("auth-token")

    

    const FriendsRequestsStatus = async(type,friend_request_id) => {

        //type = GET,PATCH or DELETE
        //GET: Get details of a friend request
        //PATCH: Accept or Reject an open friend request
        //DELETE: Delete a friend request
      
        let myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}` );
        myHeaders.append("Content-Type", "application/json");
      
        let raw;
        if(type==="PATCH")
        {
          raw= JSON.stringify({
            "status": "A"  //A--> Accept - R--> Reject and P--> Pending
          });
        } 
       
        let requestOptions = {
          method: type,
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
       await fetch("https://motion.propulsion-home.ch/backend/api/social/friends/requests/"+friend_request_id, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      
      
      }

      const HandleAcceptButton = () => {
        FriendsRequestsStatus("PATCH",prop.requestId.toString())
      } 

      const HandleDeleteButton = () => {
        FriendsRequestsStatus("DELETE",prop.requestId.toString())
      }


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
                <AcceptDenyImg alt="acceptButton" src={acceptButton} onClick={HandleAcceptButton}/>
                <AcceptDenyImg alt="denybutton" src={denyButton} onClick={HandleDeleteButton}/>
            </AcceptDenyDiv  >
            
        </RequestDiv >
    )
}

export default UsersSentRequest