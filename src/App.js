import './App.css';
import React from "react"
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Navbar,Nav } from 'react-bootstrap';

import Footer from "./components/Footer.js"
import HomePage from "./pages/HomePage.js"
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'




class App extends React.Component{

  constructor(props){
  super(props)
  this.state = {

  
    home: {
      title: "Its going to be legendary",
      text : "Some of my personal projects below."
    },

    about: {
      title: "About Me",
    },
    contact: {
      title: "Contact Me",
    }
  }
  }
  render(){
    return (
      <Router>
        <Container className = "p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg" >
            <Navbar.Brand>Isham Bhandari</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
              <Link className="nav-link" to="/portfolio">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
    
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/portfolio" exact render = {()=> <HomePage title = {this.state.home.title} text = {this.state.home.text}  /> }/>
          <Route path="/about" exact render = {()=> <AboutPage title = {this.state.about.title} text = {this.state.about.text}  /> }/>
          <Route path="/contact" exact render = {()=> <ContactPage title = {this.state.contact.title} text = {this.state.contact.text}  /> }/>
        <Footer />
        </Container>
      </Router>

    )
  }
}

export default App;
