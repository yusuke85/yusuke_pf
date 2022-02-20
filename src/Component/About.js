import React from "react";
import "./About.css"
import Image from "../Images/yusuke_portfolio3.jpg"
import { Container, Row} from "react-bootstrap";

function About() {

  return (
    <body>

    <Container >
      <Row className="AboutMe" >

        <div className="col-md-7">

          <p>I am junior full-stack developer. <br />I am from Japan and I have been living in Barcelona with my partner for four years.<br />
            My intention is to become a professional web developer 
            <br />using the knowledge acquired in MigraCode's Bootcamp.<br />
            Thanks to the work I have experienced so far, 
            <br />I have learned to work responsibly, efficiently and the "importance to keep learning".<br />
            I hope to be able to work with other people who have similar values.<br /></p>

          <p><strong>-My plofile-</strong><br />
            I'm a junior web developer with knowledge in HTML CSS Javascript and React. I'm now learning also Node.JS and some SQL.
          </p>
        </div>

          <div className="col-md-5">
            <img className="image" style={{ width: "20rem" }} src={Image} class="rounded center" alt="profileimage"></img>
          </div>

      </Row>  
    </Container>
    </body>
  )
}
export default About