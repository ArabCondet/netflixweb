import React from 'react'
import "./Body.css"

function Body() {
  return (
    <div>
        <div className='CenterH'>
            <div className='ModificationHeader'>
                <h1 className='tulisanheader'>Unlimited movies, TV Shows, and more</h1>
                <p className='textheader'>Watch Anywhere. Cancel Anytime.</p>'
            </div>
            <div className='h3header'>
                <h3 className='h3text'>Ready to watch? Enter your email to create or restart your membership.</h3>
            </div>
            <div className='input'>
                <input className='box-in' autoComplete='email' minLength={5} maxLength={50} type='email'></input>
                <button className='get-startet' type='submit'> Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default Body