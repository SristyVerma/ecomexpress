import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'
const Header = () => {
    const MainHeader=styled.header`
padding:0 4.8rem;
height:10rem;
backgroundcolor:${({theme})=>theme.colors.bg};
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

.logo{
    height:5rem
}`
  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/SV.png" alt="logo" className='logo'/>
            
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}



export default Header