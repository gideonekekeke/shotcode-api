import React from 'react'
import './menu.css'





function Menubar({ show, setShow }) {
  return (
    <>
      { show ? (<div className='menu_header'>
        <div className='menu_content'>
          <div className='menu_home'>
            <h4>HOME</h4>
          </div>
          <div className='menu_result'>
            <h4>RESULTS</h4>
          </div>

        </div>
      </div>)

        : null}

    </>
  )
}

export default Menubar
