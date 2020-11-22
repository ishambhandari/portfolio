import React from "react"
import HomeComponent from "../components/HomeComponent.js"
import Carousel from "../components/Carousel.js"
function HomePage(props){
    return(
        <div>
        <HomeComponent title = {props.title} text = {props.text}/>
        <Carousel />
        </div>
    )
}
export default HomePage