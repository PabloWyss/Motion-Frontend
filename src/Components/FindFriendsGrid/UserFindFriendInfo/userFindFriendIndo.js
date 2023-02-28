import { AvaterImg,AddFriendUserDiv,AddFriendNameP,AddFriendlocationP,
        AddFriendsDivButton,AddFriendsInerDivButton,AddFollowAddFriendButton,
        AboutMeInfoP,LikedElementsDiv,LikedIndivualElementDiv,LikedIndivualElementP} from "../findfriendsgrid.style"

const UserFindFriendInfo = (prop) => {


    return(
        <AddFriendUserDiv >
            {prop.userInfo.avatar? 
            <AvaterImg alt="avatar" src={prop.userInfo.avatar}/> : 
            <p>No Image</p>
            }
            <AddFriendNameP>{`${prop.userInfo.first_name} ${prop.userInfo.last_name}`}</AddFriendNameP >
            <AddFriendlocationP>{prop.userInfo.location}</AddFriendlocationP>
            <AddFriendsDivButton>
                <AddFriendsInerDivButton>
                    <AddFollowAddFriendButton>Follow</AddFollowAddFriendButton>
                </AddFriendsInerDivButton>
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
                        <LikedIndivualElementDiv>
                            <LikedIndivualElementP>{element}</LikedIndivualElementP>
                        </LikedIndivualElementDiv>
                    )
                })}
            </LikedElementsDiv>
        </AddFriendUserDiv>
        
    )
}

export default UserFindFriendInfo


// Foto -> Name -> Location -> (follow & addFriend) -> Lorem -> thingsliked

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


