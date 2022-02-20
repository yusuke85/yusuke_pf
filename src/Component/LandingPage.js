import React from "react";
import "./LandingPage.css"
import { Container, Row, } from "react-bootstrap"



var ReactRotatingText = require('react-rotating-text');


function LandingPage() {
  return (

    <body>
      <Container >
        <Row className="Text">
          <div className="col-lg-12">
            <h1><strong>Hi I'm Yusuke!!</strong></h1>
            <h3>I am</h3>
            <h3><strong className="WebDeveloper">Web developer</strong> and <ReactRotatingText items={['Skateboarder 🛹', 'Drawing Artist 🤖', 'Love knitting 🧶']} /> </h3>
          </div>
        </Row>
      </Container>

      <small className="copyright">
        <span>© Yusuke 2023</span>
      </small>
    </body>
  )
}

export default LandingPage










