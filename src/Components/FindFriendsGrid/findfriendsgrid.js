import { GridDiv,FindFriednsPageDiv } from "./findfriendsgrid.style"
import UserFindFriendInfo from "./UserFindFriendInfo/userFindFriendIndo"
import { v4 as uuid } from 'uuid'
import { useState, useEffect} from "react"
import axios from "axios"


const FindFirendsGrid = () => {

    const [listOfUsers2,setListOfUsers2] = useState([])

    const getUsers = async () => {

      const Token = localStorage.getItem("Token")
    
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${Token}`);
      
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };

      let limit = "10"
      let offset = "11"

      
      let userList = []

      await fetch(`https://motion.propulsion-home.ch/backend/api/users/?limit=${limit}&offset=${offset}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          userList = result.results})
        .catch(error => console.log('error', error));

      setListOfUsers2(userList)
    }

    useEffect(()=>{
      getUsers()
    },[])

    return (
        <FindFriednsPageDiv >
            <GridDiv >
                {listOfUsers2.map((user)=>{
                    return <UserFindFriendInfo key={uuid()} userInfo={user}/>
                })}
            </GridDiv >
        </FindFriednsPageDiv >
    )
}

export default FindFirendsGrid
