import styled from "styled-components"
import bannerBG from "../../img/banner-bg.jpg"

export const Fundo = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${bannerBG});
    position: relative;
    top: -50px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 80px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;


    @media (min-width: 1085px){
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

export const BannerTxt = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 20px;
    text-align: center;



    @media (min-width: 1050px){
        text-align: left;
    }

    h1{
        width: 100%;
        font-weight: 600;
        font-size: clamp(3rem, 3vw, 4rem);
        color: ${props => props.theme.darkText};
        span{

            @media (min-width: 1050px){
                color: ${props => props.theme.primaryColor};
            }
        }
    }

    p{
        font-size: clamp(1.3rem, 3vw, 1.5rem);
        color: ${props => props.theme.ligthText};
        margin: 30px;

        @media (min-width: 1050px){
            margin-left: 0;
        }

    }

    button{
        padding: 8px 25px;
        background: ${props => props.theme.primaryColor};
        color: ${props => props.theme.defaultColor};
        font-weight: 500;
        text-transform: uppercase;
        border: none;
        border-radius: 5px; 

        @media (min-width: 1050px){
            padding: 15px 32px;
        }
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