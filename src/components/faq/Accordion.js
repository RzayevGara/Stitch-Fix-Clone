import React,{useState} from 'react'
import PlusIcon from '../../assets/images/svg-icons/plus.svg'
import MinusIcon from '../../assets/images/svg-icons/minus.svg'

function Accordion(props){
    const [isActive, setIsActive] =useState(false)
    const accordionClick=()=>{
        setIsActive(!isActive)
    }

    return (
        <div>
            <dt>
                <button onClick={accordionClick}>
                    <img src={isActive?MinusIcon:PlusIcon} alt="plus"/>
                    <span>{props.data.title}</span>
                </button>
            </dt>
            <dd className={isActive ? "dd-active" : null}>{props.data.text}</dd>
        </div>
    )
}

export default Accordion