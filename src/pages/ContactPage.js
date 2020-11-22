import { render } from "@testing-library/react"
import React from "react"

import HomeComponent from '../components/HomeComponent.js'
import Contents from '../components/Contents'
import FormPage from "../components/FormPage.js"

function ContactPage(props){
        return (
            <div>
            <HomeComponent title={props.title} />
            <Contents>
             <FormPage />
            </Contents>
            </div>
        )
    }

export default ContactPage