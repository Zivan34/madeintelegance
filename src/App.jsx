import { useState } from 'react'
import logo from "./assets/images/logo-wide.png"
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from "react-social-media-embed";

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [message, setMessage] = useState("")

  return (
    <Container className="mb-5">
      <div className="p-4 mb-4">
        <Row className="justify-content-center">
          <Col className="col-6">
            <img src={logo} className="mie-homePageLogo"></img>
          </Col>
        </Row>
        <Row className="text-center justify-content-center">
          <Col>
            <h1>MadeIntElegance</h1>
            <h3>made with intelligence for elegance</h3>
          </Col>
        </Row>
      </div>
      <Row className="text-center justify-content-center" gap="1" >
        <Col lg="6">
          <InstagramEmbed url="https://www.instagram.com/madeintelegance/" />
        </Col>
        <Col lg="6">
          <blockquote className="tiktok-embed p-0 m-0"
            cite="https://www.tiktok.com/@madeintelegance"
            data-unique-id="madeintelegance"
            data-embed-type="creator"
          > 
            <section> 
              <a target="_blank" href="https://www.tiktok.com/@madeintelegance?refer=creator_embed">@madeintelegance</a> 
            </section> 
          </blockquote>
          <TikTokEmbed url="https://www.tiktok.com/@madeintelegance" style={{"opacity" : "0"}}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
