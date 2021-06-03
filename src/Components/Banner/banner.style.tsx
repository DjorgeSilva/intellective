import styled from "styled-components"
import bannerBG from "../../img/banner-bg.jpg"

export const Fundo = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    background-image: url(${bannerBG});
    position: relative;
    top: -50px;


`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: 1085px){
        flex-direction: row;
    }
`

export const BannerTxt = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 20px;
    text-align: center;

    h1{
        font-weight: 600;
        font-size: clamp(2.5rem, 3vw, 4rem);
        span{
            color: #F9522A;
        }
    }

    p{
        font-size: clamp(1.3rem, 3vw, 1.5rem);
        margin: 30px;
    }

    button{
        padding: 8px 25px;
        background: #F9522A;
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        border: none;
        border-radius: 5px; 
    }
`

export const BannerImg = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 100px;

    img{
        width: 100%;
    }
`