import React from 'react'
import HeroSection from './components/HeroSection'
// import { useProductContext } from './context/productcontext'


// import { AppContext} from './context/productcontext'

const About = () => {
  // const {names}=useContext(AppContext)


  // just to minisie it we are using custom hooks
  // const {names}=useProductContext()
  return (
    <>
    {/* {names} */}
    <HeroSection name="About Us"/>
    </>
  )
}

export default About