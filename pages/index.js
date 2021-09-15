import React from 'react';

// components
import AboutSec from '../components/sections/AboutSec';
import VideoSec from '../components/sections/VideoSec';
import DownloadSec from '../components/sections/DownloadSec';

class Home extends React.Component{
  render() {
    return (
      <div>
        <VideoSec/>
        <AboutSec/>
        <DownloadSec/>
      </div>
    )
  }
}

export default Home;