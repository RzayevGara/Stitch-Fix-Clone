import React,{useState} from 'react'
import ShuffleData from '../../shuffleData'
import LikeIcon from '../../assets/images/svg-icons/like.svg'

function Shuffle() {
    const data = ShuffleData
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(false)
    const [like, setLike] = useState()

    const shuffleImages = (likeStatus)=>{
        likeStatus==0?setLike(false):setLike(true)
        setActive(true)
        setTimeout(()=>{
            setIndex(index<3?index+1:0)
            setActive(false)
        },400)
    }

  return (
    <div className="shuffle">
        <div className="shuffle-text">
            <h2>Let's get to know each other</h2>
            <p>By rating outfits, you will help us understand your one-of-a-kind style.</p>
        </div>
        <div className="shuffle-area">
            <div className="shuffle-container">
                <p>STYLE SHUFFLE</p>
                <h3>Would you wear this?</h3>
                <div className={active?like==0?"dislike-active":"like-active":"shuffle-image"}>
                    <img src={data[index].img} alt="shuffle-img"/>
                </div>
                <div className="shuffle-buttons">
                    <button onClick={()=>shuffleImages(0)} className="btn-dislike">
                        <img src={LikeIcon} alt="logo"/>
                    </button>
                    <button onClick={()=>shuffleImages(1)} className="btn-like">
                        <img src={LikeIcon} alt="logo"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shuffle