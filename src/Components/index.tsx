import React from 'react'
import * as s from "./nav.style"
import logo from "../img/logo.png"
import { FiMenu } from "react-icons/fi"
import { IoClose } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export const Header: React.FC = (): JSX.Element => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    //style Link
    const styleLink = {
        textDecoration: "none",
    }

    return (
        <React.Fragment>

            <s.Wrapper>
                <s.Nav className="container">

                    <s.WrapperLogo>
                        <img src={logo} alt="logomarca" />
                    </s.WrapperLogo>

                    <s.WrapperIconeMenu>
                        <FiMenu className="icone-menu" onClick={()=> setIsOpen(!isOpen)}/>
                    </s.WrapperIconeMenu>

                </s.Nav>
            </s.Wrapper>

            <s.SideBar isOpen={isOpen}>

                <IoClose className="icone-close"/>

                <ul>
                    <li>
                        <Link to="/" style={styleLink} className="link" >Products</Link>
                    </li>
                    <li>
                        <Link to="/" style={styleLink} className="link">About us</Link>
                    </li>
                    <li>
                        <Link to="/" style={styleLink} className="link">Contact us</Link>
                    </li>
                </ul>
            </s.SideBar>

        </React.Fragment>
    )
}
