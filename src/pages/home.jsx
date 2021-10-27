import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Components
import Navbar from "../components/Navbar/index"
import HomeContent from '../components/HomeContent'

const Home = () => {
   return (
      <Router>
         <Navbar></Navbar>
         <HomeContent></HomeContent>
      </Router>
   )
}

export default Home
