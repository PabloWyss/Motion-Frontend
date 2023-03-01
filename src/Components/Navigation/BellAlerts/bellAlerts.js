import { useEffect, useState } from "react"
import { NavigationBellUl,
NavigationBellLi,
NavigationBelldiv
 } from "../navigation.style"
import { useDispatch, useSelector } from "react-redux"
import { fetchFriendRequests } from "../../../redux/slices/friendReuqestSlice"
import UsersSentRequest from "./UsersAlerts/usersSentRequest"
import UsersReceivedRequest from "./UsersAlerts/userReceibvedRequest"



const BellAlerts = () => {


    const dispatch = useDispatch()


    const myID = "2236"
    const requestedToUser = []
    const requestedByUser = []

    useEffect(()=>{
        dispatch(fetchFriendRequests())
    },[])

    const request = useSelector(store => store)
    
    if(request.friendRequests.requests.results){
        const listOfRequests = request.friendRequests.requests.results
        const requestKeys = Object.keys(listOfRequests)
        requestKeys.forEach((idElement)=>{
        if(listOfRequests[idElement].requester.id == myID) {
            requestedByUser.push(listOfRequests[idElement])
        } else {
            requestedToUser.push(listOfRequests[idElement])
        }
        })
    }

    return (
        <NavigationBelldiv>
            <NavigationBellUl>
                <p>
                    Received Requests
                </p>
                {requestedToUser.map((elementId)=>{
                    return (
                        <UsersSentRequest key={elementId.id} requester={elementId.requester}/>
                    )
                })}
                <NavigationBellLi>
                </NavigationBellLi>
                <p>
                    Sent Requests
                </p>
                <NavigationBellLi>
                {requestedByUser.map((elementId)=>{
                    return (
                        <UsersReceivedRequest key={elementId.id} receiver={elementId.receiver}/>
                    )
                })}
                </NavigationBellLi>
            </NavigationBellUl>
        </NavigationBelldiv>
        
    )
}

export default BellAlerts