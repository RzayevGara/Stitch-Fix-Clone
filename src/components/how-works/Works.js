import PhoneIcon from '../../assets/images/svg-icons/hiw-style-preferences.svg'
import ClothesIcon from '../../assets/images/svg-icons/hiw-stylist-selections.svg'
import BagIcon from '../../assets/images/svg-icons/hiw-personalized-shops.svg'

function Works() {
  return (
    <div className="works">
        <h2>How Stitch Fix works</h2>
        <div className="works-container">
            <div>
                <img src={PhoneIcon} alt="phone"/>
                <h3>Tell us about your style</h3>
                <p>Take a quick and easy style quiz to help us learn what you love.</p>
            </div>
            <div>
                <img src={ClothesIcon} alt="phone"/>
                <h3>Get pieces picked just for you</h3>
                <p>Collaborate with your stylist to receive pieces that reflect your style, fit and price point.</p>
            </div>
            <div>
                <img src={BagIcon} alt="phone"/>
                <h3>Shop on your own in your personalized store</h3>
                <p>Discover new items and outfit suggestions every day.</p>
            </div>
        </div>
    </div>
  )
}

export default Works