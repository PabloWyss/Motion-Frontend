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
  PageBorder,
} from "./searchAndFilterBar.style";

const SearchAndFilterBar = () => {
  return (
    <SearchBarContainer>
      <PageBorder />
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
      <PageBorder />
    </SearchBarContainer>
  );
}

export default SearchAndFilterBar