import React from 'react'

const Footer = () => {
  return (
    <div className='footer-m'>
        <p className='para'>Made by Anshul Soni, guided by Adrian Hajdin 💙</p>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/anshulsoni4", "_blank")
          }
          className='black_btn button1'
        >
          My GitHub
        </button>
        <button
          type='button'
          onClick={() =>
            window.open("https://twitter.com/Anshul_the_soni", "_blank")
          }
          className='black_btn button2'
        >
          My Twitter
        </button>
    </div>
    
  )
}

export default Footer