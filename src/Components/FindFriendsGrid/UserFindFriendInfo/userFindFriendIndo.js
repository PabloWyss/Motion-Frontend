import { AvaterImg,AddFriendUserDiv,AddFriendNameP,AddFriendlocationP,
        AddFriendsDivButton,AddFriendsInerDivButton,AddFollowAddFriendButton,FollowInerDivButton,
        AboutMeInfoP,LikedElementsDiv,LikedIndivualElementDiv,LikedIndivualElementP} from "../findfriendsgrid.style"
import { v4 as uuid } from 'uuid'
import { useState, useEffect } from "react"

const UserFindFriendInfo = (prop) => {
    
    const [FolowUser,setFollowUser] = useState(prop.userInfo.logged_in_user_is_following)


    const Usersfollow = (userid) => {

        const Token = localStorage.getItem("auth-token")
      
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${Token}`);
        
        var raw = "";
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          redirect: 'follow'
        };
        fetch("https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/"+userid+"/", requestOptions)
          .then(response => response.text())
          .catch(error => console.log('error', error));
      
    }

    

    const hanldeFollowButton = () => {
        setFollowUser(!FolowUser)
        Usersfollow(prop.userInfo.id)
    }

    return(
        <AddFriendUserDiv >
            {prop.userInfo.avatar? 
            <AvaterImg alt="avatar" src={prop.userInfo.avatar}/> : 
            <p>No Image</p>
            }
            <AddFriendNameP>{`${prop.userInfo.first_name} ${prop.userInfo.last_name}`}</AddFriendNameP >
            <AddFriendlocationP>{prop.userInfo.location}</AddFriendlocationP>
            <AddFriendsDivButton>
                <FollowInerDivButton follow={FolowUser} onClick={hanldeFollowButton}>
                    <AddFollowAddFriendButton>{FolowUser? "Followed" : "Follow"}</AddFollowAddFriendButton>
                </FollowInerDivButton>
                <AddFriendsInerDivButton>
                    <AddFollowAddFriendButton>Add Friend</AddFollowAddFriendButton>
                </AddFriendsInerDivButton>
            </AddFriendsDivButton>
            <AboutMeInfoP>
                {prop.userInfo.about_me}
            </AboutMeInfoP>
            <LikedElementsDiv>
                {prop.userInfo.things_user_likes.map((element)=>{
                    return (
                        <LikedIndivualElementDiv key={uuid()}>
                            <LikedIndivualElementP>{element}</LikedIndivualElementP>
                        </LikedIndivualElementDiv>
                    )
                })}
            </LikedElementsDiv>
        </AddFriendUserDiv>
        
    )
}

export default UserFindFriendInfo






// {
//     "id": 5,
//     "email": "guillaumer@propulsionacademy.com",
//     "first_name": "Billy",
//     "last_name": "Bob",
//     "username": "Billy",
//     "job": "Coffee drinker",
//     "avatar": "https://motion.propulsion-home.ch/media-files/schrimp_man_TKoKgA3.jpg",
//     "banner": null,
//     "location": "Zürich",
//     "phone_number": "",
//     "about_me": "I like to drink coffee while playing guitar and shooting some free throws",
//     "things_user_likes": [
//       "BBQ",
//       "Basket",
//       "Guitar"
//     ],
//     "logged_in_user_is_following": false,
//     "logged_in_user_is_friends": false,
//     "logged_in_user_is_rejected": false,
//     "logged_in_user_received_fr": false,
//     "logged_in_user_sent_fr": false,
//     "amount_of_posts": 0,
//     "amount_of_likes": 0,
//     "amount_of_friends": 2,
//     "amount_of_followers": 14,
//     "amount_following": 1
//   },


