import Data from '../../faqData'
import Accordion from './Accordion'

function Faq(){
    const faqData = Data

    return (
        <div className="faq">
            <div className="faq-container">
                <h2>FAQs</h2>
                <dl>
                    {
                        faqData.map((el, index)=>(
                            <Accordion data={el} index={index}/>
                        ))
                    }
                </dl>
            </div>
        </div>
    )
}

export default Faq