import React from 'react'
import { Link } from 'react-router-dom'
import * as s from "./banner.style"
import banner from "../../img/banner.png"

export const Banner: React.FC = (): JSX.Element => {
    return (
        <s.Fundo>
            <s.Wrapper className="container">
                <s.BannerTxt>
                    <h1>Create <span>WONDER</span>ful Portals Quickly</h1>
                    <p>Build engaging, personalized and beautiful websites for your business</p>
                    <Link to="/">
                        <button>Learn more</button>
                    </Link>
                </s.BannerTxt>

                <s.BannerImg>
                    <img src={banner} alt="" />
                </s.BannerImg>
            </s.Wrapper>
        </s.Fundo>
    )
}
