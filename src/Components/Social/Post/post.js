export  const  GetAll_Post = (offset) => {

    //
     
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://motion.propulsion-home.ch/backend/api/social/posts/?limit=25&offset="+offset, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
    
  
  }
  
  export const GetPost_UserId=(offset) =>
  {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/social/posts/user/2251/?limit=25&offset="+offset, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
  
  
  
  export  const  Post = () => {
  
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "user": {
      "email": "user@example.com",
      "first_name": "string",
      "last_name": "string",
      "username": "string"
    },
    "content": "test22"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://motion.propulsion-home.ch/backend/api/social/posts/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
  
  
  }
  
  
  
  
  export const GET_post_id = (type,post_id) => {
  
    //type = GET,PATCH or DELETE
  
  
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
  
  var requestOptions = {
  method: type,
  headers: myHeaders,
  redirect: 'follow'
  };
  
  fetch("https://motion.propulsion-home.ch/backend/api/social/posts/"+post_id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
  
  }
  
  
  
  export const GET_post_search = (search) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://motion.propulsion-home.ch/backend/api/social/posts/?search="+search, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  
  
  
  export const Usersfollow = (userid) => {
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
    
    var raw = "";
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/"+userid+"/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }
  
  
  export const GetUsersFollowing = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/social/followers/following/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  
  }
  
  
  export const GetUsersFollowers = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/social/followers/followers/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  }
  
  
  export const SendFriendRequest= (userid) => {
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NjgxMzk4LCJqdGkiOiI0Yjg0NjMwOWQ4MDU0ZTQzOTFiYjgxMjkyMmM2ZDlhMiIsInVzZXJfaWQiOjIyNTF9.o-vrYJ1SHkVh5OtsmccYdxQ0DWkQh-6fnqyhg8QgDNc");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/social/friends/request/"+userid+"/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }

  
export const FriendsRequestsStatus = (type,friend_request_id) => {

    //type = GET,PATCH or DELETE
    //GET: Get details of a friend request
    //PATCH: Accept or Reject an open friend request
    //DELETE: Delete a friend request
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzU3NjY1LCJqdGkiOiI4NDRkNGIxN2M5ZDM0NGUxYTNkYmI0ZDg1NTgxMjhiOSIsInVzZXJfaWQiOjIyMzV9.uX1RdxUtSQjUjNqFVdv6JItzpMTzhgQROZWbyRP8RY8");
    myHeaders.append("Content-Type", "application/json");
  
    var raw;
    if(type==="PATCH")
    {
      raw= JSON.stringify({
        "status": "A"  //A--> Accept - R--> Reject and P--> Pending
      });
    }
   
    
    var requestOptions = {
      method: type,
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/social/friends/requests/"+friend_request_id, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  }
  export const GetAllAcceptedFriends = () => {
  //api/social/friends/ GET: List all accepted friends
  
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzU3NjY1LCJqdGkiOiI4NDRkNGIxN2M5ZDM0NGUxYTNkYmI0ZDg1NTgxMjhiOSIsInVzZXJfaWQiOjIyMzV9.uX1RdxUtSQjUjNqFVdv6JItzpMTzhgQROZWbyRP8RY8");
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://motion.propulsion-home.ch/backend/api/social/friends", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  
  
  
  }
  
  
  export const GetAllUsers=(offset) =>
  {
  
    //GET: Get all the users
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzY5NTE0LCJqdGkiOiJjNjkyNTYyYTRlNWQ0ZjMzOTY4ZDkxN2I3MjllYWRjMyIsInVzZXJfaWQiOjIyODR9.rSLQ_bZT_DwG4Z9l53V21oDP5-gw2MU8QjvplW9619c");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/users/?limit=25&offset="+offset, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
  
  
  export const GETSearchUsers_Text = (search,offset) => {
  
    //GET: Search users
  
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzY5NTE0LCJqdGkiOiJjNjkyNTYyYTRlNWQ0ZjMzOTY4ZDkxN2I3MjllYWRjMyIsInVzZXJfaWQiOjIyODR9.rSLQ_bZT_DwG4Z9l53V21oDP5-gw2MU8QjvplW9619c");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/users/?limit=25&offset="+offset+"&search="+search, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
  
    export const GETSearchUsers_userid = (userid) => {
      //GET: Get specific user profile
  
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzY5NTE0LCJqdGkiOiJjNjkyNTYyYTRlNWQ0ZjMzOTY4ZDkxN2I3MjllYWRjMyIsInVzZXJfaWQiOjIyODR9.rSLQ_bZT_DwG4Z9l53V21oDP5-gw2MU8QjvplW9619c");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      fetch("https://motion.propulsion-home.ch/backend/api/users/"+userid, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }
    
      export const GetUsers_me = async () => { 
   
        //var myHeaders = new Headers();
  //myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3NzU3NjY1LCJqdGkiOiI4NDRkNGIxN2M5ZDM0NGUxYTNkYmI0ZDg1NTgxMjhiOSIsInVzZXJfaWQiOjIyMzV9.uX1RdxUtSQjUjNqFVdv6JItzpMTzhgQROZWbyRP8RY8");
  
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}` );
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
  
  await fetch("https://motion.propulsion-home.ch/backend/api/users/me/", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
      }