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