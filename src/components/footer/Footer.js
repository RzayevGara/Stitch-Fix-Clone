import React, {useState} from 'react'
import PlusIcon from '../../assets/images/svg-icons/plus.svg'
import MinusIcon from '../../assets/images/svg-icons/minus.svg'
import Logo from '../../assets/images/svg-icons/logo.svg'
import AppStoreIcon from '../../assets/images/svg-icons/app-store.svg'
import FacebookIcon from '../../assets/images/svg-icons/facebook.svg'
import InstagramIcon from '../../assets/images/svg-icons/instagram.svg'
import PinterestIcon from '../../assets/images/svg-icons/pinterest.svg'
import TwitterIcon from '../../assets/images/svg-icons/twitter.svg'
import TiktokIcon from '../../assets/images/svg-icons/tiktok.svg'
import YoutubeIcon from '../../assets/images/svg-icons/youtube.svg'

function Footer() {
    const [show, setShow] = useState(false)
    const showMore = ()=>{
        setShow(!show)
    }
  return (
    <footer>
        <div className="footer-container">
            <div className="country-select">
                <select defaultValue={0}>
                    <option value="0">United States</option>
                    <option value="1">United Kingdom</option>
                </select>
                <p>Questions? <span>Visit our FAQ </span></p>
            </div>
            <div className="show-more">
                <div className="show-more_line"></div>
                <button onClick={showMore}>
                    <span>More Info</span>
                    <img src={show?MinusIcon:PlusIcon} alt="logo"/>
                </button>
            </div>
            <div className={show?"footer-info footer-info_active":"footer-info"}>
                <div className="footer-list">
                    <ul>
                        <li>The Servise</li>
                        <li>Gift Cards</li>
                        <li>Iphone App</li>
                        <li>Plus Sizes</li>
                        <li>Maternity</li>
                        <li>Petite</li>
                        <li>Big Tall</li>
                        <li>Women`s Jeans</li>
                        <li>Business Casual</li>
                    </ul>
                    <ul>
                        <li>The Company</li>
                        <li>About Us</li>
                        <li>Social Impact</li>
                        <li>Women`s Blog</li>
                        <li>Men`s Blog</li>
                        <li>Press</li>
                        <li>Investor Relations</li>
                        <li>Careers</li>
                        <li>Tech Blog</li>
                    </ul>
                    <ul>
                        <li>Questions?</li>
                        <li>FAQ</li>
                        <li>Help</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className="footer-social">
                    <img src={FacebookIcon} alt="logo"/>
                    <img src={InstagramIcon} alt="logo"/>
                    <img src={PinterestIcon} alt="logo"/>
                    <img src={TwitterIcon} alt="logo"/>
                    <img src={TiktokIcon} alt="logo"/>
                    <img src={YoutubeIcon} alt="logo"/>
                </div>
                <div className="footer-logo">
                    <img className="site-logo" src={Logo} alt="logo"/>
                    <select defaultValue={0}>
                        <option value="0">United States</option>
                        <option value="1">United Kingdom</option>
                    </select>
                    <img src={AppStoreIcon} alt="logo"/>
                </div>
            </div>
        </div>
        <div className="footer-terms">
            <div>
                <a href="#">Terms of Use</a>
                -
                <a href="#">Privacy Policy</a>
                -
                <a href="#">Supply Chain Information</a>
                -
                <a href="#">Ad Choices</a>
                -
                <a href="#">CA Notice at Collection</a>
                -
                <a href="#">Sitemap</a>
            </div>
            <p>Stitch Fix and Fix are trademarks of Stitch Fix, Inc.</p>
        </div>
    </footer>
  )
}

export default Footer