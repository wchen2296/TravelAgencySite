import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import '../App.css'
import './Mainpage.css'

function Mainpage() {
  return (
    <div className='mainpage-container'>
        
      <h1 >THE FUTURE OF TRAVEL IS HERE</h1>
      <p>What are you waiting for?</p>
      <div className='mainpage-btns'>
      <Link to="/services">
      <Button
       className='btns'
       buttonStyle='btn--outline'
       buttonSize='btn--large'
       to="/services" 
       >
       Visit Now
      </Button>
      </Link>
      <Link to="/aboutus">
      <Button
       className='btns'
       buttonStyle='btn--outline'
       buttonSize='btn--large'
       to="/aboutus" 
       >
       Learn More
      </Button>
      </Link>
      </div>
    </div>
  )
}

export default Mainpage
