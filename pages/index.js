
export default function Home() {
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
    </div>
  )
}
