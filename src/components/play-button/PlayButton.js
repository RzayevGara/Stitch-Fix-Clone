import PlayIcon from '../../assets/images/svg-icons/play.svg'
import PauseIcon from '../../assets/images/svg-icons/pause.svg'
import React,{useState} from 'react'

const PlayButton = (props)=> {
const [play, setPlay] = useState(true)

  const videoDom = props.videoRef
  const index= props.index

  const videoPlay = ()=>{
    setPlay(!play)
    play?videoDom.current[index].pause():videoDom.current[index].play()
  }
  
  return (
    <>
        <button className="btn-play"onClick={videoPlay}>
            <img src={play?PauseIcon:PlayIcon} alt="play"/>
        </button>
    </>
  )
}

export default PlayButton