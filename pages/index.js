import React from 'react';
import Image from 'next/image';

// assets
import AboutImg from '../assets/img/about-img.jpg';

class Home extends React.Component{
  render() {
    return (
      <div>
        {/* video sec */}
        <div className="video-sec">
          {/* video */}
          <video autoPlay muted loop>
              <source src="../video/video-bg.mp4" type="video/mp4"/>
          </video>
          {/* text */}
          <div className="video-sec-text">
            <h1>Social media</h1>
            <p>explore the perfect communication</p>
          </div>
          {/* scroll mouse */}
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
        </div>
        {/* about sec */}
        <div className="container">
          <div className="about-sec">
            <div className="about-sec-text">
              <h2>About</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <Image src={AboutImg} alt="Social media screen" width={750} height={450}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;