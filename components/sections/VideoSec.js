const VideoSec = () => {
    return(
        <div className="video-sec">
            <video autoPlay muted loop>
                <source src="../video/video-bg.mp4" type="video/mp4"/>
            </video>
            <div className="video-sec-text">
                <h1>Social media</h1>
                <p>explore the perfect communication</p>
            </div>
            <div className="scroll-downs">
                <div className="mousey">
                    <div className="scroller"></div>
                </div>
            </div>
        </div>
    )
}

export default VideoSec;