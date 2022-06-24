import Data from '../../data'

function Brands() {
    const images = Data
  return (
    <div className="brands">
        <div className="brands-text">
            <h2>Let us find your faves from 1000+ brands & styles</h2>
            <p>We carry women`s sizes XS-3X including <a href="/">Plus</a>, <a href="/">Petite</a> and <a href="/">Maternity</a>.</p>
        </div>
        <div className="brands-logo">
            <div className="brands-logo_container">
                {
                    images.map((el, index) =>(
                        <div className="logos" key={index}>
                            <img src={el.img} alt="logo"/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Brands