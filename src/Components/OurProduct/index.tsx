import React from 'react'
//packages
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
//style
import * as s from "./ourproduct.style"
//img
import ourProductIMG from "../../img/ourProductImg.png"
import amazeLogo from "../../img/amazeLogo.png"
import marvelLogo from "../../img/marvel-Logo.png"
import wonderLogo from "../../img/wonderLogo.png"


export const OurProduct: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <s.ProductTxt className="container">
                <div className="left-side">
                    <h6>Our Products</h6>
                    <h1>Design and build faster with Intellective Apps</h1>
                    <p>Our goal is to ensure our customers get the most out of their ServiceNow investment. Keeping that in mind, we have built a number of apps that let you harness the power of NOW platform and build business solutions at a fraction of the cost and time. Our current offerings let you build actionable knowledge articles and native mobile application right from the ServiceNow platform. </p>
                </div>

                <div className="right-side">
                    <img src={ourProductIMG} alt="Nossos Produtos" />
                </div>
            </s.ProductTxt>

            <s.GridProducts className="container">
                <Row className="row">
                    <Col xs={12} md={4} className="item-coluna">
                        <img src={amazeLogo} alt="produto - amaze" />
                        <p>Build and edit articles for knowledge base</p>
                        <Link to="/">
                            <button className="btn-blue">Learn More</button>
                        </Link>
                    </Col>

                    <Col xs={12} md={4} className="item-coluna middle-column">
                        <img src={marvelLogo} alt="produto - marvel" />
                        <p>Custom build native mobile apps and see your designs instantly on mobile devices</p>
                        <Link to="/">
                            <button className="btn-green">Learn More</button>
                        </Link>
                    </Col>

                    <Col xs={12} md={4} className="item-coluna last-column">
                        <img src={wonderLogo} alt="produto - wonder" />
                        <p>Build engaging personalized and beautiful websites for your business​</p>
                        <Link to="/">
                            <button className="btn-orange">Learn More</button>
                        </Link>
                    </Col>
                </Row>
            </s.GridProducts>
        </s.Wrapper>
    )
}
