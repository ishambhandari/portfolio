import React from 'react'

import CardText from "./CardText.js"
function Card(props){
    return(
        <div className="d-inline-block i-card" onClick={(e)=>props.click(props.item)} >
            <img className="i-card-image" src={props.item.imgSource} alt={props.item.imgSource} />
            {props.item.selected && <CardText title={props.item.title} text={props.item.text} link={props.item.link}/>}
        </div>
    )
}

export default Card