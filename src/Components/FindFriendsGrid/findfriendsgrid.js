import { GridDiv,FindFriednsPageDiv } from "./findfriendsgrid.style"
import UserFindFriendInfo from "./UserFindFriendInfo/userFindFriendIndo"
import { v4 as uuid } from 'uuid'


const FindFirendsGrid = () => {


    const listOfUsers = getUserObj.results

    console.log(listOfUsers)
    

    return (
        <FindFriednsPageDiv >
            <GridDiv >
                {listOfUsers.map((user)=>{
                    return <UserFindFriendInfo key={uuid()} userInfo={user}/>
                })}
            </GridDiv >
        </FindFriednsPageDiv >
    )
}

export default FindFirendsGrid

const getUserObj = {
    "count": 1493,
    "next": "https://motion.propulsion-home.ch/backend/api/users/?limit=25&offset=25",
    "previous": null,
    "results": [
      {
        "id": 828,
        "email": "karimabdelazizsdsda@live.com",
        "first_name": "",
        "last_name": "",
        "username": "karimabdelazizsdsda@live.com",
        "job": "",
        "avatarw": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 3,
        "amount_of_followers": 5,
        "amount_following": 0
      },
      {
        "id": 769,
        "email": "hannes.froemel@gmail.com",
        "first_name": "",
        "last_name": "",
        "username": "hannes.froemel@gmail.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 1,
        "amount_of_followers": 4,
        "amount_following": 0
      },
      {
        "id": 774,
        "email": "narda.posch@propulsion.com",
        "first_name": "",
        "last_name": "",
        "username": "narda.posch@propulsion.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 1,
        "amount_of_followers": 4,
        "amount_following": 0
      },
      {
        "id": 1012,
        "email": "gexisat326@drlatvia.com",
        "first_name": "",
        "last_name": "",
        "username": "gexisat326@drlatvia.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 1,
        "amount_following": 0
      },
      {
        "id": 779,
        "email": "cbetan@gmail.com",
        "first_name": "",
        "last_name": "",
        "username": "cbetan@gmail.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 2,
        "amount_following": 0
      },
      {
        "id": 784,
        "email": "conrad.mutawe@gmail.com",
        "first_name": "",
        "last_name": "",
        "username": "conrad.mutawe@gmail.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 789,
        "email": "fblanco.ch@gmail.com",
        "first_name": "",
        "last_name": "",
        "username": "fblanco.ch@gmail.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 794,
        "email": "danielam@propulsionacademy.com",
        "first_name": "",
        "last_name": "",
        "username": "danielam@propulsionacademy.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 799,
        "email": "karimabdelazizyyyy@live.com",
        "first_name": "",
        "last_name": "",
        "username": "karimabdelazizyyyy@live.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 1,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 833,
        "email": "lap77082@cuoly.com",
        "first_name": "bolor",
        "last_name": "jdjdj",
        "username": "gianbolor",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 1,
        "amount_of_followers": 4,
        "amount_following": 0
      },
      {
        "id": 948,
        "email": "hfggjrvsnpajhkikaw@wqcefp.com",
        "first_name": "",
        "last_name": "",
        "username": "hfggjrvsnpajhkikaw@wqcefp.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 1,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 809,
        "email": "juans@propulsionacademy.com",
        "first_name": "Juan Miguel",
        "last_name": "Sánchez Arce",
        "username": "JuanMiguelSanchezArce",
        "job": "",
        "avatar": "https://motion.propulsion-home.ch/media-files/JMSA_WhiteBackground.png",
        "banner": "https://motion.propulsion-home.ch/media-files/Groot_Revenge.jpg",
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 2,
        "amount_of_followers": 8,
        "amount_following": 0
      },
      {
        "id": 883,
        "email": "HerrlichUnfassbarerPiranha@datenschutz.ru",
        "first_name": "",
        "last_name": "",
        "username": "HerrlichUnfassbarerPiranha@datenschutz.ru",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 5,
        "email": "guillaumer@propulsionacademy.com",
        "first_name": "Billy",
        "last_name": "Bob",
        "username": "Billy",
        "job": "Coffee drinker",
        "avatar": "https://motion.propulsion-home.ch/media-files/schrimp_man_TKoKgA3.jpg",
        "banner": null,
        "location": "Zürich",
        "phone_number": "",
        "about_me": "I like to drink coffee while playing guitar and shooting some free throws",
        "things_user_likes": [
          "BBQ",
          "Basket",
          "Guitar"
        ],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 2,
        "amount_of_followers": 14,
        "amount_following": 1
      },
      {
        "id": 1786,
        "email": "kurivytu@forexnews.bg",
        "first_name": "name",
        "last_name": "test",
        "username": "username1234",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 814,
        "email": "pantxasera11@hotmail.ch",
        "first_name": "",
        "last_name": "",
        "username": "pantxasera11@hotmail.ch",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 1,
        "amount_following": 0
      },
      {
        "id": 819,
        "email": "ndf25159@zwoho.com",
        "first_name": "",
        "last_name": "",
        "username": "ndf25159@zwoho.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 1,
        "amount_following": 0
      },
      {
        "id": 824,
        "email": "olivia.pvfdfosch@outlook.com",
        "first_name": "",
        "last_name": "",
        "username": "olivia.pvfdfosch@outlook.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 838,
        "email": "fifoyoc225@geekale.com",
        "first_name": "peter",
        "last_name": "peter",
        "username": "peter12",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 3,
        "amount_following": 0
      },
      {
        "id": 843,
        "email": "antonyalex@gmx.net",
        "first_name": "",
        "last_name": "",
        "username": "antonyalex@gmx.net",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 888,
        "email": "dapdqsmvzrddtiazou@twzhhq.com",
        "first_name": "",
        "last_name": "",
        "username": "dapdqsmvzrddtiazou@twzhhq.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 848,
        "email": "asdflkjasdlfj@gmail.com",
        "first_name": "",
        "last_name": "",
        "username": "asdflkjasdlfj@gmail.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 853,
        "email": "safdasdf@gmail.com",
        "first_name": "",
        "last_name": "",
        "username": "safdasdf@gmail.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 858,
        "email": "sadflkajsddfasdffasd@gmail.com",
        "first_name": "",
        "last_name": "",
        "username": "sadflkajsddfasdffasd@gmail.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 0,
        "amount_of_followers": 0,
        "amount_following": 0
      },
      {
        "id": 893,
        "email": "jik02860@eoopy.com",
        "first_name": "",
        "last_name": "",
        "username": "jik02860@eoopy.com",
        "job": "",
        "avatar": null,
        "banner": null,
        "location": "",
        "phone_number": "",
        "about_me": "",
        "things_user_likes": [],
        "logged_in_user_is_following": false,
        "logged_in_user_is_friends": false,
        "logged_in_user_is_rejected": false,
        "logged_in_user_received_fr": false,
        "logged_in_user_sent_fr": false,
        "amount_of_posts": 0,
        "amount_of_likes": 0,
        "amount_of_friends": 1,
        "amount_of_followers": 1,
        "amount_following": 0
      }
    ]
  }