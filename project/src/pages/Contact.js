import React from 'react'
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
import about from './Contact.svg'
import './Contact.css';

function Contact() {
  return (
    <div>
      <div id='name'>
        <div className='display-1 d-flex flex-column' id='main-text'>
          <h1 id='e1' className='text-white display-1 fst-italic fw-bolder' style={{ fontSize: '5rem' }}>
            <span className='text-primary'>T</span>rust
          </h1>
          <h1 id='e2' className='text-white display-1 fst-italic fw-bolder' style={{ fontSize: '5rem' }}>
            <span className='text-primary'>I</span>n
          </h1>
          <h1 id='e3' className='text-white display-1 fst-italic fw-bolder' style={{ fontSize: '5rem' }}>
            <span className='text-primary'>T</span>alent
          </h1>
          <span id='img'> <img src={about} width="500px" alt="About" /></span>
        </div>
      </div>
      {/* <div id="routemap">
        <br className='mb-5'/>
        <br className='mb-5'/>
        <h2 className='text-center text-white fs-1 mb-5'>Road Map</h2>
        <div id='cont' className='d-flex flex-column'>
        <div id='b1' className='bg-white rounded d-block m-1 p-5 fs-5 fst-italic'>
          <p><span className='me-3'></span>Create Your Profile</p>
        </div> <BiRightArrow className='arrow1'size="2rem"/>
        <div id='b2' className='bg-white rounded d-block m-1 p-5 fs-4 fst-italic'><p>Present Your Idea</p></div>
        <div id='line'></div><BiLeftArrow className='arrow2'size="2rem"/>
        <div id='b3' className='bg-white rounded m-1 p-5 fs-4 fst-italic '><p>Get Approved</p></div>
        <BiRightArrow className='arrow1'size="2rem"/>
        <div id='b4' className='bg-white rounded m-1 p-5 fs-4 fst-italic'><p>Funding</p></div>
        <BiLeftArrow className='arrow2 mb-5' size="2rem"/>
        <br className='mt-5 mb-5'/>
        <br className='mt-5 mb-5'/>
        <br className='mb-5'/>
        <br className='mb-5'/>
        </div>
      </div> */}
    </div>
  )
}

export default Contact;