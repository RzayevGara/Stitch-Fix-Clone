import React,{useRef, useState, useEffect} from 'react'
import VideoMobile from '../../assets/videos/women-stitch-fix-video-tablet.mp4'
import VideoDesktop from '../../assets/videos/women-stitch-fix-video.mp4'
import PlayButton from '../play-button/PlayButton'

function Discovering() {
  const videoDom = useRef([])
  
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 768) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize)
  })

  return (
    <div className="discovering">
        <div className="discovering-text">
          <div className="discovering-text_container">
            <div>
              <p>
                  Discovering styles you 
                  <br/>
                  love just got easier
              </p>
              <button>Take your style quiz</button>
            </div>
          </div>
        </div>
        <div className="discovering-video">
          <video ref={(element) => {videoDom.current[0] = element}} src={isMobile?VideoMobile:VideoDesktop} muted={true} loop autoPlay>
          </video>
          <PlayButton index={0} videoRef={videoDom}/>
        </div>
    </div>
  )
}

export default Discovering