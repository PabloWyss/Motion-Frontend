import React from 'react'
import { MainContainer } from './posts.style'
import Navigation from '../../Components/Navigation/navigation'
import SearchAndFilterBar from "../../Components/SearchAndFilterBar/searchAndFilterBar";
import PostWrapper from '../../Components/Social/Post/postWrapper';

const Posts = () => {
  return (
    <MainContainer>
      <Navigation />
      <SearchAndFilterBar />
      <PostWrapper />
    </MainContainer>
  )
}

export default Posts