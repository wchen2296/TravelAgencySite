import React from 'react'
import { Button } from './Button'
import '../App.css'
import './Mainpage.css'

function Mainpage() {
  return (
    <div className='mainpage-container'>
        
      <h1>Find relief wherever you go</h1>
      <p>Say goodbye to bathroom anxiety</p>
      <div className='mainpage-btns'>
      <Button className='btns' buttonStyle='btn--Outline' buttonSize='btn--large'>
        Learn More
      </Button>
      <Button className='btns' buttonStyle='btn--Primary' buttonSize='btn--large'>
        Give Us Feedback
      </Button>
      </div>
    </div>
  )
}

export default Mainpage
