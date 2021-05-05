import React from 'react'
import "./ProjectBody.css"
import vidClip from "../Video/Bdcl.mp4"
import ola from "../Img/a.png"
import debby from "../Img/b.png"
import osazie from "../Img/c.png"
import emma from "../Img/d.png"
import gidi from "../Img/e.png"
import yusuf from "../Img/f.png"
import lekan from "../Img/g.png"
import UseModal01 from '../UseModal/UseModal01'
import UseModal02 from '../UseModal/UseModal02'
import UseModal03 from '../UseModal/UseModal03'

function ProjectBody() {
  return (
    <div className="parentDiv">
      <div className="subParentDiv">

        <div className="videoDiv">
          <video autoPlay loop muted src={vidClip} alt="shortVedioClip" className="Video" type="video/mp4" />
        </div>

        <div className="textDiv">
          <p className="field">Choose Your Developnment Field</p>
        </div>

        <div className="buttonDiv">
          {/* <button className="button">Web Developnment</button>
          <button className="button">UI/UX</button>
          <button className="button">Mobile Developnment</button> */}

          <UseModal01 />
          <UseModal02 />
          <UseModal03 />
        </div>

        <hr className="hr" />

        <div className="secondTextDiv">
          <p className="Team">Meet Our Dev Team</p>
        </div>

        <div className="devTeamDiv">
          <img src={ola} alt="mrOla" className="classMate" />
          <img src={debby} alt="debby" className="classMate" />
          <img src={osazie} alt="osazie" className="classMate" />
          <img src={emma} alt="emma" className="classMate" />
          <img src={gidi} alt="gidi" className="classMate" />
          <img src={yusuf} alt="yusuf" className="classMate" />
          <img src={lekan} alt="lekan" className="classMate" />
        </div>


        <div className="devTeamTextDiv">
          <p className="devField">Mobile Developer</p>
          <p className="devField">UI/UX Designer</p>
          <p className="devField">Web Developer</p>
          <p className="devField">Web Developer</p>
          <p className="devField">Web Developer</p>
          <p className="devField">Mobile Developer</p>
          <p className="devField">Mobile Developer</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectBody
