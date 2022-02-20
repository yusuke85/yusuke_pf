import React from "react";
import "./Works.css"
import Image from "../Images/Seis_Samurai.png";
import Image2 from "../Images/Proximity_Network.png";
import Image3 from "../Images/TodoList.png";
import { Card, Container, Row, Col } from "react-bootstrap";

const Works = () => {
  return (
    <body>


      <h1>Projectos</h1>

      <Container className="Cards"  >

        <Row style={{ maxWidth: "100%", marginLeft: "0", marginRight: "0"}} >
          <Col className="col-xs-12 col-lg-6" style={{ paddingLeft:"0px"}} >
            <Card className="card" >
              <a href="https://cranky-hodgkin-0e75e8.netlify.app/" target="_blank">
                <Card.Img variant="top" className="image" src={Image} />
              </a>
            </Card>
          </Col>
          <div className="col-xs-12 col-lg-6" id="tex">
            <h4 className="text1" style={{ maxWidth: "100%"}}>
              This is a web page that introduces Japanese dogs.
              <br />Introducing 6 kinds of dogs (samurai) from <br />Japan with each character.
            </h4>
          </div>
        </Row>

        <Row style={{ maxWidth: "100%", marginLeft: "0", marginRight: "0"}} >
          <Col className="col-xs-12 col-lg-6" style={{ paddingLeft:"0px"}}>
            <Card >
              <a href="https://proximitynetwork.web.app/" target="_blank">
                <Card.Img variant="top" className="image" src={Image2} />
              </a>

            </Card>
          </Col>

          <div className="col-xs-12 col-lg-6" id="tex">
            <h4 className="text2">
              A web page created by a team of four people in the Migracode graduation project.<br />
              It is a site where you can search for shops <br />
              that handle only organic ingredients,
              <br />and shops can also register here to <br />
              browse their own products.</h4>
          </div>
        </Row>

        <Row style={{ maxWidth: "100%", marginLeft: "0", marginRight: "0"}} >
          <Col className="col-xs-12 col-lg-6" style={{ paddingLeft:"0px"}}  >
            <Card >
              <a href="https://kind-yalow-658427.netlify.app/" target="_blank">
                <Card.Img variant="top" className="image" src={Image3} />
              </a>

            </Card>
          </Col>

          <div className="col-xs-12 col-lg-6">
            <h4 className="text2">
              This is a application that can manage schedules which< br/>
              used HTML, CSS and Javascript.< br />
              You can management your task which you have to do, < br />
              and It will help you plan to use your time effectively.
            </h4>
          </div>
        </Row>
      </Container>


    </body>

  )
}


export default Works