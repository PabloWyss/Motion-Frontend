import { useEffect, useState } from "react"
import { NavigationBellUl,
NavigationBellLi,
NavigationBelldiv
 } from "../navigation.style"

const BellAlerts = () => {

    // const Token = localStorage.getItem("auth-token")
    // const [friendRequests,setFriendRequests] = useState({})

    // const SendFriendRequest= async () => {
    //     let myHeaders = new Headers();
    //     myHeaders.append("Authorization", `Bearer ${Token}`);
        
    //     let requestOptions = {
    //       method: 'GET',
    //       headers: myHeaders,
    //     };
        
    //     await fetch("https://motion.propulsion-home.ch/backend/api/social/friends/requests/", requestOptions)
    //       .then(response => response.json())
    //       .then(result => setFriendRequests(result.results))
    //       .catch(error => console.log('error', error));
      
    //   }

    //   useEffect (()=>{
    //     SendFriendRequest()
    //   },[])

    //   console.log((friendRequests))
    //   let requesters = friendRequests
    
    

      

    return (
        <NavigationBelldiv>
            <NavigationBellUl>
            <NavigationBellLi>
                Received Requests
            </NavigationBellLi>
            <NavigationBellLi>
                Users
            </NavigationBellLi>
            <NavigationBellLi>
                Sent Requests
            </NavigationBellLi>
            <NavigationBellLi>
                Users
            </NavigationBellLi>
            </NavigationBellUl>
        </NavigationBelldiv>
        
    )
}

export default BellAlerts