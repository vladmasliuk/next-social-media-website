// components
import AboutSec from '../components/sections/AboutSec';
import VideoSec from '../components/sections/VideoSec';
import DownloadSec from '../components/sections/DownloadSec';
import ContactSec from '../components/sections/ContactSec';


function Home(){
  return (
    <div>
      <VideoSec/>
      <AboutSec/>
      <DownloadSec/>
      <ContactSec/>
    </div>
  )
}

export default Home;