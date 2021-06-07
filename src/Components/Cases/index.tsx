import React from 'react'
//packages
import { Row, Col } from 'react-bootstrap'
import {Link} from "react-router-dom"
//styles
import * as s from "./cases.style"
//images
import casesItem from "../../img/cases-item.jpg"
//icons
import {BsArrowRight} from "react-icons/bs"

export const Cases: React.FC = (): JSX.Element => {

    const styleLink = {
        textDecoration: "none"
    }

    return (
        <s.Wrapper>
            <Row className="row container">
                <Col xs={12} className="coluna">
                    <h1>Case Studies</h1>
                    <p>We are happy to share with you our experience and the best practices we have learned over the years on how to make the most value of your ServiceNow investment.</p>
                </Col>

                <Col xs={12} md={3} className="coluna coluna-imagem">
                    <img src={casesItem} alt="Nosso pessoal" />

                    <Link to="/" className="link-case" style={styleLink}>
                        <p>Case Study</p>
                    </Link>

                    <Link to="/" className="link-case" style={styleLink}>
                        <h5>Multinational Retail Case Study</h5>
                    </Link>

                    <Link to="/" className="link-readMore" style={styleLink}>
                        <h6>Read More</h6>
                        <BsArrowRight className="icone-link"/>
                    </Link>

                </Col>

            </Row>

        </s.Wrapper>
    )
}
