import React from "react";
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
import {LikedPosts} from  "../Social/LikedPosts/likedPosts"

const handleLoginClick = async (e) => {
  e.preventDefault();
   
  console.log("test");

  //LikedPosts()
  
};




const SearchAndFilterBar = () => {
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
