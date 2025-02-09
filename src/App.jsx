import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <div className='card'>
        <img 
          src="/anonymous_qr_code.png"
          alt="QR code" 
          className='qr-code' 
        />
        <h3 className='title-text'>Improve your front-<br/>end skills by building projects</h3>
        <p className='description-text'>Scan the QR code to visit Frontend <br/> Mentor and take your coding skills to <br/> the next level</p>
      </div>
    </div>
  )
}

export default App