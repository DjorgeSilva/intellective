import React from 'react'
//packages
import { Row, Col } from 'react-bootstrap'
//styles
import * as s from "./contato.style"

export const Contato: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <Row className="row container">
                <Col xs={12} md={6} className="coluna coluna-txt">
                    <h1>Get in Touch</h1>
                    <p>We are located in the heart of Silicon Valley in Mountain View CA. We also have presence in New York and Chicago. Our global partner design and development centers are located in Buenos Aires (Argentina) and Ahmedabad (India).</p>
                    <p>We are always open to opportunities to help people and businesses. Please feel free to contact us.</p>
                    <p>We look forward to hearing from you.</p>
                </Col>

                <Col xs={12} md={6} className="coluna coluna-form">
                    <form>
                        <input type="text" placeholder="Your Name*"/>
                        <input type="email" name="email" id="email" placeholder="Email*"/>
                        <input type="tel" name="telefone" id="telefone" placeholder="Phone*"/>
                        <input type="tel" name="telefone" id="telefone" placeholder="Your Company Name*"/>
                        <textarea name="mensagem" id="mensagem" placeholder="Please enter your comments"/>
                        <button>Submit</button>
                    </form>
                </Col>
            </Row>

        </s.Wrapper>
    )
}
