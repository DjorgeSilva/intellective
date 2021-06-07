import React from 'react'
//packages
import { Col, Row } from 'react-bootstrap'
//style
import * as s from "./ourService.style"
//image
import ourServiceIMG from "../../img/home_ourservices.jpg"
import { Link } from 'react-router-dom'

export const OurService: React.FC = (): JSX.Element => {

    const styleLink = {
        textDecoration: "none",
    }

    return (
        <s.Wrapper>
            <Row className="row container">
                <Col xs={12} md={6} className="coluna">
                    <img src={ourServiceIMG} alt="Nosso Serviço" />
                </Col>

                <Col xs={12} md={6} className="coluna">
                    <h6>OUR SERVICES</h6>
                    <h1>We offer a wide array of services</h1>
                    <p>Ever want to add or expand your UX and Development service offerings but not get into the cost of building a team? Our teams have worked at and with companies that range from startups to fortune 100s. This gives us the understanding and experience needed to execute in any arrangement. We specialize in everything mobile, IOT and web. No matter what the challenge is, we can build it. </p>
                    <Link to="/" style={styleLink} className="link">Learn More</Link>
                </Col>
            </Row>

            <Row className="grid-servicos container">
                <Col xs={12} md={6} lg={3} className="coluna-grid title-grid">
                    <h1>Services that get it done</h1>
                </Col>

                <Col xs={12} md={6} lg={3} className="coluna-grid">
                    <h5>USER EXPERIENCE + STRATEGY</h5>
                    <p>In order to accomplish a great product is to understand company goals while empathizing with their client needs, the end user.</p>
                </Col>

                <Col xs={12} md={6} lg={3} className="coluna-grid">
                    <h5>INTUITIVE VISUAL DESIGN</h5>
                    <p>Our Visual Design capabilities are top-notch and can have your digital interface looking amazing.</p>
                </Col>

                <Col xs={12} md={6} lg={3} className="coluna-grid">
                    <h5>SOFTWARE DEVELOPMENT</h5>
                    <p>Good software is not the one that just does the job but it is the one that is also manageable, predictable and extendable.</p>
                </Col>
            </Row>

        </s.Wrapper>
    )
}
