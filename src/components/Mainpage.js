import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Mainpage.css'

function Mainpage() {
  return (
    <div className='mainpage-container'>
        
      <h1>THE FUTURE OF TRAVEL IS HERE</h1>
      <p>What are you waiting for?</p>
      <div className='mainpage-btns'>
      <Button className='btns' buttonStyle='btn--Outline' buttonSize='btn--large'>
        Visit Now
      </Button>
      <Button className='btns' buttonStyle='btn--Primary' buttonSize='btn--large'>
        About Us
      </Button>
      </div>
    </div>
  )
}

export default Mainpage
