import React,{useState} from "react";
import icon_search from "../../assets/svgs/search_icon.svg";
import {
  ContainerWrapperLeft,
  FilterWrapper,
  ContainerWrapperRight,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
  FilterSetter,
  SearchBarWrapper
} from "./searchAndFilterBar.style";


const SearchAndFilterBar = () => {


  const Token = localStorage.getItem("auth-token");
  const [ownPosts, setOwnPosts] = useState([]);

  const handleLoginClick = async (e) => {
    e.preventDefault();
    await GetLikedPosts();
    console.log(ownPosts);
    
  };
  
  
  const GetLikedPosts = async () => {
      
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3OTQzOTU1LCJqdGkiOiJkZDlkMjEyYjI1YTM0Y2E4YTlmMjQxYzk4NjUyNzVhNSIsInVzZXJfaWQiOjIyODR9.nQLXzJjnHqNJskQUpu9jr-u3EVuz9NXwqDrr-wTw29c");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://motion.propulsion-home.ch/backend/api/social/posts/likes/", requestOptions)
      .then(response => response.json())
      .then(result => setOwnPosts(result.results))
      .catch(error => console.log('error', error));
  }

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
      <ContainerWrapperLeft>
        <SearchIcon src={icon_search}></SearchIcon>
        <SearchInput type="text" placeholder="Search posts..."></SearchInput>
      </ContainerWrapperLeft>
      <ContainerWrapperRight>
        <FilterWrapper>
    
          <FilterSetter type="button" onClick={handleLoginClick}>Liked</FilterSetter>
          <FilterSetter>Friends</FilterSetter>
          <FilterSetter>Follow</FilterSetter>
        </FilterWrapper>
      </ContainerWrapperRight>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};

export default SearchAndFilterBar;
