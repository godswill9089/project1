import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className='img-group'>
        <div className='gina-ayo'>
            <img src="/images/Group 11.png" alt="" className='couple'/>
            <div>
              <img src="/images/Asset 1 1.png" alt="" className='about-asset' />
              <h2 className='vs'>RVSP</h2>
            </div>
        </div>
        <div className='container-box'>
          <div className='content'>
            <h1 className='text-about'>OUR STORY</h1>
            <p className='story'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cupiditate, blanditiis non aliquam officia at voluptate 
                 quam similique corrupti voluptatum distinctio
                 adipisci explicabo minus veritatis illum saepe et quasi minima provident!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cupiditate, blanditiis non aliquam officia at voluptate 
                 quam similique corrupti voluptatum distinctio
                 adipisci explicabo minus veritatis illum saepe et quasi minima provident!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cupiditate, blanditiis non aliquam officia at voluptate 
                 quam similique corrupti voluptatum distinctio
                 adipisci explicabo minus veritatis illum saepe et quasi minima provident!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cupiditate, blanditiis non aliquam officia at voluptate 
                 quam similique corrupti voluptatum distinctio
                 adipisci explicabo minus veritatis illum saepe et quasi minima provident!</p>
            <img src="/images/Mask group.png" alt="" className='story-png'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
