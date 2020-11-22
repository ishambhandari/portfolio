import { render } from "@testing-library/react"
import React from "react"

import sathi from "../assets/images/sathi.png"
import ml from "../assets/images/ml.png"
import ecommerce from "../assets/images/ecommerce.jpg"
import Card from "../components/Card.js"

import {Container, Row, Col } from "react-bootstrap"
class Carousel extends React.Component{
    constructor(props){
    super(props)

    this.state =
     {
     
    items : [{
        id:0,
        title:"Sathi",
        text:"Dating site experiment",
        imgSource: sathi,
        link:'https://github.com/ishambhandari/sathi-public',
        selected: false
    },
    {
        id:1,
        title:"Ecommerce",
        text:"Personal Ecommerse project",
        imgSource: ecommerce,
        link: "https://github.com/ishambhandari/sathi-public",
        selected: false
    },

    {
        id:2,
        title:"Polynomial Regression",
        text:"Stock market analysis",
        imgSource: ml,
        link:"https://github.com/ishambhandari/sathi-public",
        selected: false
    }
    ]
}

}
    handleCardClick = (id, card) => {
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true
        items.forEach(items => {
            if(items.id !== id){
                items.selected  =false
            }
        })
        this.setState({
            items

        })
    }

        makeItems = (items) => {
            return items.map(item =>{
                return <Card item = {item} click = {(e => this.handleCardClick(item.id, e))} key={item.id}/>
            })
        }

        render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                    
                </Row>
            </Container>
        )
        }
    }

export default Carousel