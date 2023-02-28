import React from 'react'
import icon_search from '../../assets/svgs/search_icon.svg'
import {
  ContainerWrapperLeft,
  FilterWrapper,
  ContainerWrapperRight,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
  FilterSetter,
} from "./searchAndFilterBar.style";

const SearchAndFilterBar = () => {
  return (
    <SearchBarContainer>
      <ContainerWrapperLeft>
        <SearchIcon src={icon_search}></SearchIcon>
        <SearchInput type="text" placeholder="Search posts..."></SearchInput>
      </ContainerWrapperLeft>
      <ContainerWrapperRight>
        <FilterWrapper>
          <FilterSetter>Liked</FilterSetter>
          <FilterSetter>Friends</FilterSetter>
          <FilterSetter>Follow</FilterSetter>
        </FilterWrapper>
      </ContainerWrapperRight>
    </SearchBarContainer>
  );
}

export default SearchAndFilterBar