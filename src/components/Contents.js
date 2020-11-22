import React from "react"


import {Container, Row, Col} from "react-bootstrap"
function Contents(props){
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                {props.children} 
                </Col>
            </Row>
        </Container>
    )
}

export default Contents