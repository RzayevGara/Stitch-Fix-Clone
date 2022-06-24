import Swiper from './swiper/Swiper'

function Carousel() {
  return (
    <div className="carousel">
        <div className="carousel-text">
            <h2>Tell us what you like, we’ll find what you love</h2>
            <p>We get to know your style, fit and price range based on your style quiz, requests and feedback.</p>
        </div>
        <Swiper/>
    </div>
  )
}

export default Carousel