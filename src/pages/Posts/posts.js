import React from 'react'
import { MainContainer } from './posts.style'
import Navigation from '../../Components/Navigation/navigation'
import SearchAndFilterBar from "../../Components/SearchAndFilterBar/SearchAndFilterBar";

const Posts = () => {
  return (
    <MainContainer>
      <Navigation />
      <SearchAndFilterBar/>
    </MainContainer>
  )
}

export default Posts