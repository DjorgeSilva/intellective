import React from 'react'
//packages
import { Link } from 'react-router-dom'
//image
import logo from "../../img/logo.png"
//styles
import * as s from "./nav.style"
//icons
import { FiMenu } from "react-icons/fi"
import { IoClose } from 'react-icons/io5'
import { RiArrowDropDownLine } from "react-icons/ri"



type Props = {
    isOpen: boolean;
    setIsOpen: (active: boolean) => void;
}

export const Header: React.FC<Props> = ({ isOpen, setIsOpen }: Props): JSX.Element => {

    const [submenu, setShowSubMenu] = React.useState<boolean>(true);

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
                        <FiMenu className="icone-menu" onClick={() => setIsOpen(!isOpen)} />
                    </s.WrapperIconeMenu>

                    <s.MenuDesktop>
                        <ul>
                            <li><Link to="/" style={styleLink} className="link" onMouseEnter={()=> setShowSubMenu(!submenu)} >
                                Products
                                </Link>
                                <RiArrowDropDownLine className="icone-dropdown" />

                                <s.FloatingMenu submenu={submenu} onMouseLeave={()=> setShowSubMenu(!submenu)}>
                                    <nav>
                                        <ul>
                                            <li><Link to="/" style={styleLink} className="link">Amaze</Link></li>
                                            <li><Link to="/" style={styleLink} className="link">Marvel</Link></li>
                                            <li><Link to="/" style={styleLink} className="link">Wonder</Link></li>
                                        </ul>
                                    </nav>
                                </s.FloatingMenu>

                            </li>
                            <li onMouseEnter={()=> setShowSubMenu(false)}><Link to="/" style={styleLink} className="link">About us</Link></li>
                            <li onMouseEnter={()=> setShowSubMenu(false)}><Link to="/" style={styleLink} className="link">Contact us</Link></li>
                        </ul>
                    </s.MenuDesktop>

                </s.Nav>
            </s.Wrapper>

            <s.SideBar isOpen={isOpen}>

                <IoClose className="icone-close" onClick={() => setIsOpen(!isOpen)} />

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
