import React from 'react'
//packages
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//style
import * as s from "./blog.style"
//images
import blog1 from "../../img/blog1.png"
import blog2 from "../../img/blog2.jpg"
import blog3 from "../../img/blog3.png"
//icons
import { BsArrowRight } from 'react-icons/bs'

export const Blog: React.FC = (): JSX.Element => {

    const styleLink = {
        textDecoration: "none",
    }

    return (
        <s.Wrapper>
            <Row className="row container">
                <Col xs={12} className="coluna">
                    <h1>Recent Blog Posts</h1>
                    <p>We are happy to share our experience and knowledge with you. Check out our blog where we post about popular topics such as employee experience, low-code, no-code development, ServiceNow tips, tricks, ROI and more…</p>
                </Col>

                <Col xs={12}className="coluna coluna-grid">
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="wrapper-img">
                                <img src={blog1} alt="Nosso Blog" />
                            </div>

                            <div className="wrapper-txt">
                                <Link to="/" style={styleLink} className="links">Blog, </Link>
                                <Link to="/" style={styleLink} className="links">Employee Experience, </Link>
                                <Link to="/" style={styleLink} className="links">Service Portal, </Link>
                                <Link to="/" style={styleLink} className="links">ServiceNow </Link>
                            </div>

                            <div className="wrapper-links">
                                <Link to="/" style={styleLink}>
                                    <h6 className="h6"> Increase Employee Engagement through recognition</h6>
                                </Link>

                                <Link to="/" style={styleLink} className="link-readMore">
                                    <h6>Read More</h6>
                                    <BsArrowRight className="icone-link" />
                                </Link>
                            </div>
                        </Col>


                        <Col xs={12} md={4}>
                            <div className="wrapper-img">
                                <img src={blog2} alt="Nosso Blog" />
                            </div>

                            <div className="wrapper-txt">
                                <Link to="/" style={styleLink} className="links">Blog, </Link>
                                <Link to="/" style={styleLink} className="links">Employee Experience, </Link>
                                <Link to="/" style={styleLink} className="links">Service Portal, </Link>
                                <Link to="/" style={styleLink} className="links">ServiceNow </Link>
                            </div>

                            <div className="wrapper-links">
                                <Link to="/" style={styleLink}>
                                    <h6 className="h6"> Increase Employee Engagement through recognition</h6>
                                </Link>

                                <Link to="/" style={styleLink} className="link-readMore">
                                    <h6>Read More</h6>
                                    <BsArrowRight className="icone-link" />
                                </Link>
                            </div>
                        </Col>



                        <Col xs={12} md={4}>
                            <div className="wrapper-img">
                                <img src={blog3} alt="Nosso Blog" />
                            </div>

                            <div className="wrapper-txt">
                                <Link to="/" style={styleLink} className="links">Blog, </Link>
                                <Link to="/" style={styleLink} className="links">Employee Experience, </Link>
                                <Link to="/" style={styleLink} className="links">Service Portal, </Link>
                                <Link to="/" style={styleLink} className="links">ServiceNow </Link>
                            </div>

                            <div className="wrapper-links">
                                <Link to="/" style={styleLink}>
                                    <h6 className="h6"> Increase Employee Engagement through recognition</h6>
                                </Link>

                                <Link to="/" style={styleLink} className="link-readMore">
                                    <h6>Read More</h6>
                                    <BsArrowRight className="icone-link" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </s.Wrapper>
    )
}
