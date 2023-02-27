import React from 'react'
import { Logo, MainContainer } from './header.styled'
import logo from '../../assets/images/logo.png'





const Header = () => {
  return (
    <MainContainer>
      <Logo src={logo}></Logo>

    </MainContainer>
  )
}

export default Header