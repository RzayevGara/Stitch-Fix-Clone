import React, {useState} from 'react'
import MobileLogo from '../../assets/images/svg-icons/logo-mobile.svg'
import DesktopLogo from '../../assets/images/svg-icons/logo.svg'
import BasketIcon from '../../assets/images/svg-icons/basket.svg'

function Header() {
    const [buttonActive, setButtonActive] = useState(false)

    const hamburgerClick= ()=>{
        setButtonActive(!buttonActive)
    }
  return (
    <header >
        <div className="container">
            <div className="left-section">
                <div onClick={hamburgerClick} className={buttonActive?"hamburger-menu hamburger-menu_active":"hamburger-menu"}>
                    <div className="line"></div>
                    <div className="line hide"></div>
                    <div className="line"></div>
                </div>
                <img className="mobile-logo" src={MobileLogo} alt="site-logo"/>
                <img className="desktop-logo" src={DesktopLogo} alt="site-logo"/>
                <ul>
                    <li className="active-list">Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                </ul>
            </div>
            <div className="right-section">
                <ul className={buttonActive?"ul-menu_active":null}>
                    <li className="hidden-list">Home</li>
                    <li>Social Impact</li>
                    <li>FAQ</li>
                    <li>Gift Cards</li>
                    <button className="btn-sign-red">Sign In</button>
                </ul>
                <div className="bag">
                    <img src={BasketIcon} alt="basket-logo"/>
                    <p>Bag</p>
                </div>
                <button className="btn-sign">Sign In</button>
            </div>
        </div>
    </header>
  )
}

export default Header