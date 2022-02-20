import React from "react";
import "./Links.css"
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
// import { Row, Col } from "react-bootstrap";

const Links = () => {

  

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <LinkContainer to="/" className="title">
            <Navbar.Brand><strong id="yusuke">Yusuke Fujita</strong></Navbar.Brand>
          </LinkContainer>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav" style={{backgroundColor: "black"}}>
            <ul class="navbar-nav" >
              <LinkContainer to="/Works">
                <Nav.Link ><strong>Project</strong></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/About" id="About">
                <Nav.Link ><strong>About</strong></Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contact">
                <Nav.Link ><strong>Contact</strong></Nav.Link>
              </LinkContainer>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )


}

export default Links
















