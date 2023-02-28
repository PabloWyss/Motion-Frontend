import styled from "styled-components";


export const GridDiv = styled.div `
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    height: 100%;
    aspect-ratio: 1/1;
    gap: 1rem;
    justify-items: center;
    margin-top: 1rem;
    
`

export const FindFriednsPageDiv = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #F2F2F2;
    flex-wrap: nowrap;
`

export const AvaterImg = styled.img `
    width: 6rem;
    height: 6rem;
    opacity: 0.9;
`

export const AddFriendUserDiv = styled.div `
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    height: 30rem;
    width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
`

export const AddFriendNameP = styled.p `
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;
    margin: 0;
`

export const AddFriendlocationP = styled.p `
    font-size: 1rem;
    text-align: center;
    margin: 0;
`

export const AddFriendsDivButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 90%;
`

export const FollowInerDivButton = styled.div`
    mix-blend-mode: normal;
    border: 1px solid #d9d9d9;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 3rem;
    width: 8.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.follow ? "white" : "linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%)"}
`

export const AddFriendsInerDivButton = styled.div`
    mix-blend-mode: normal;
    border: 1px solid #d9d9d9;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 3rem;
    width: 8.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const AddFollowAddFriendButton = styled.p`
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: black;
`

export const AboutMeInfoP = styled.p`
    font-weight: 400;
    font-size: .8rem;
    text-align: center;
    width: 90%;
    margin: 0;
`

export const LikedElementsDiv = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .5rem;
`

export const LikedIndivualElementDiv = styled.div`
    mix-blend-mode: normal;
    background-color: #f4f3f3;
    border-radius: 2rem;
`

export const LikedIndivualElementP = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin-left: 20px;
    margin-right: 20px;
    
`