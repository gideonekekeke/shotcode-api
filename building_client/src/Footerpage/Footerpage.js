import React, { useState } from 'react'
import './footer.css'
import image from '../img/ola.jpg'






function Footerpage() {

  return (
    <div className='footer'>
      <div className='footer_content'>
        <div className='footer_image'>
          <img alt='logo' />
        </div>
        <div className='aboutus'>
          <h3>About us</h3>
          <p>Brighterdays codelab offers a wide variety
          of programs and courses and led
                by leading industry experts</p>
        </div>
      </div>
      <div className='footer_content1'>

        <div className='contactus'>
          <h3>contact us</h3>
          <p>Brighterdays codelab offers a wide variety
          of programs and courses and led
                by leading industry experts</p>
        </div>
      </div>
      <div className='down_page'>
        <div className='dowm_content'>
          <h4>(C) 2020 Hackator,  All Rights Reserverd. Design by BDCL students</h4>
        </div>

      </div>




    </div>


  )
}

export default Footerpage
