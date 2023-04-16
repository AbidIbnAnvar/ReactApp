import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="image1-container">
            <img className="image1"src="/images/sven-mieke-MsCgmHuirDo-unsplash2.jpg" alt="Picture of GYM" />
            <div className="textblock">
                <h1>ARE YOU READY?</h1>
                <p>You are capable of so much more than you think. Believe in yourself and push yourself to reach your full potential through exercise.Don't let excuses hold you back. You owe it to yourself to prioritize your health and well-being. Take the first step towards a healthier you by starting your workout today.</p>
                <Link to='/pricing'><button className="join-now"><span>Join Now </span></button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home
