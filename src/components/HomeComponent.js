import React from "react"
import { Jumbotron, Container, Row, Col } from "react-bootstrap"

function HomeComponent(props){
    
    return(
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
            <Row className="justify-content-center py-5">
                <Col md={8} sm={12}>
                    {props.title && <h1 className="display-1 font-weight-bold py-3">{props.title}</h1>}
                    {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                </Col>
            </Row>
        </Container>
    </Jumbotron>
)
}

export default HomeComponent