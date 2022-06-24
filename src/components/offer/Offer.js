import ClothesIcon from '../../assets/images/svg-icons/clothes.svg'
import BoxIcon from '../../assets/images/svg-icons/box.svg'
import ScissorsIcon from '../../assets/images/svg-icons/scissors.svg'

function Offer()  {
    return (
        <div className="offer">
            <h2>We make it easy to build your dream closet</h2>
            <div className="offer-container">
                <ul>
                    <li>
                        <img src={ClothesIcon} alt="logo"/>
                        <h3>Expert picks</h3>
                        <p>Get outfit and styling suggestions that meet your price preferences.</p>
                    </li>
                    <li>
                        <img src={BoxIcon} alt="logo"/>
                        <h3>Free shipping</h3>
                        <p>Easy returns and exchanges on all orders, pre-paid labels included.</p>
                    </li>
                    <li>
                        <img src={ScissorsIcon} alt="logo"/>
                        <h3>No commitment</h3>
                        <p>Shop when you want, how you want. No subscription required.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Offer