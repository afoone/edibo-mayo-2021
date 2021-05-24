import React from 'react'
import './Card.css'

const Card = ({element, setVisible}) => {
// element.id
    return (
        <div className="card" onClick={()=>!element.completed && setVisible(element.id)}>
           {(element.visible || element.completed) && <img src={element.image}></img>}
        </div>
    )
}

export default Card
