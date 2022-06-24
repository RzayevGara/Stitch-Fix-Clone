import Image from '../../assets/images/jpg-images/stylist-mobile.jpg'
import Comma from '../../assets/images/svg-icons/comma.svg'

function Comments() {
  return (
    <div className="comments">
        <div className="comments-pic_text">
            <div className="comments-image">
                <img src={Image} alt="logo"/>
            </div>
            <div className="comments-text">
                <h2>Real people who really get your style</h2>
                <p>Your stylist can help complete a look, collaborate on trends, recommend pieces that fit your unique body and incorporate your input into each item they send.</p>
            </div>
        </div>
        <div className="comments-scroll">
            <ul>
                {
                    Array(3).fill().map((el,index)=>(
                        <li key={index}>
                            <blockquote>
                                <p>
                                    <img src={Comma} alt="comma"/>
                                    By collaborating to blend her unique taste, fit and body type, I helped Sara find the perfect jeans to flatter her petite frame!
                                </p>
                                <cite>
                                    <span>Christina</span>, <span>stylist</span> 
                                </cite>

                            </blockquote>
                        </li>
                    ))
                }

            </ul>
        </div>
    </div>
  )
}

export default Comments