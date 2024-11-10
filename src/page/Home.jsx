import React from 'react'
import Nav from '../components/Nav'
import ChategariesMain from '../components/ChategariesMain'
import Slideimg from '../components/Slideimg'
import Contact from '../components/Contact'
import ProductInput from '../components/ProductInput'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Nav/>
        <ChategariesMain/>
        <Slideimg/>
        <ProductInput/>
        <Contact/>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Home