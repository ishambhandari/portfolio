import { render } from '@testing-library/react'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import HomeComponent from './HomeComponent'
import Axios from 'axios';

class FormPage extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        name : '',
        email : '',
        message : '',
        disabled : false,
        emailSent: null

    }
}
    handleChange = (event) => {
        const target = event.target 
        const value = target.type === "checkbox" ? target.checked : target.value 
        const name = target.name

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            disabled : true,
            emailSent: true
        })


    }

    
    render(){
        return(
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="full-name">Full Name</Form.Label>
                    <Form.Control id="full-name" name="name" type="text" value ={this.state.name} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="Email">Email</Form.Label>
                    <Form.Control id="email" name="email" type="email" value ={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="text">Text</Form.Label>
                    <Form.Control id="text" name="text" as="textarea" rows="11" value ={this.state.text} onChange={this.handleChange}/>
                </Form.Group>

                <Button className="d-inline-block" varient="primary" type="submit" disabled={this.state.disabled}>
                    Send
                    </Button>

                {this.state.emailSent === true && <p className="d-inline success-msg">Message Sent</p>}
                {this.state.emailSent === false && <p className="d-inline err-msg">Message Not Sent</p>}
            </Form>
        </div>
    )
}
}
export default FormPage