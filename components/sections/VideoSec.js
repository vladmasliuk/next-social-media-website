import Scroll from 'react-scroll'

const ScrollLink = Scroll.Link;

const VideoSec = () => {
    return(
        <div className="video-sec">
            <video autoPlay muted loop playsinline>
                <source src="../video/video-bg.mp4" type="video/mp4"/>
            </video>
            <div className="video-sec-text">
                <h1>Social media</h1>
                <p>explore the perfect communication</p>
            </div>
            <ScrollLink 
                to="about-sec" 
                spy={true} 
                smooth={true} 
                duration={1000} 
                offset={-150}
            >
                <div className="scroll-downs">
                    <div className="mouse">
                        <div className="scroller"></div>
                    </div>
                </div>
            </ScrollLink>
        </div>
    )
}

export default VideoSec;