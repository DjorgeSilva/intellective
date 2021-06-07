import React from 'react'
//packages
import { Col, Row } from 'react-bootstrap'
//style
import * as s from "./ourStaff.style"
//images
import staff_bg from "../../img/staff_bg.jpg"

export const OurStaff: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <Row className="row container">
                <Col xs={12} md={6} className="coluna">
                    <h6>OUR STAFFING SERVICES</h6>
                    <h1>Recruiting experts for your business needs</h1>
                    <p>In order for your business to succeed, you need the right people. We take the time to listen and understand your business needs and we will locate, screen, and place only the most qualified candidates. </p>
                </Col>

                <Col xs={12} md={6} className="coluna">
                    <img src={staff_bg} alt="Nosso pessoal" />
                </Col>

            </Row>

        </s.Wrapper>
    )
}
