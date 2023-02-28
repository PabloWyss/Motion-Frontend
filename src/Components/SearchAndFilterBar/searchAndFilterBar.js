import React from 'react'
import {search} from '../../assets/svgs/search_icon.svg'

const SearchAndFilterBar = () => {
  return (
    <>
      <div>Div left
        <img src={search}></img>
        <input type='text' placeholder='Search posts...'></input>
      </div>
      <div>Div left

      </div>
    </>
  )
}

export default SearchAndFilterBar