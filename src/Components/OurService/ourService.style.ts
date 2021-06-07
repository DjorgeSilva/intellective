import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    background: #F9F9F9;
    padding-bottom: 90px;

    .container{
        margin: 0 auto;
        
        .coluna{

            @media (min-width: 796px){
                height: 500px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;

            }

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            h6{
                text-transform: uppercase;
                color: ${props => props.theme.primaryColor};
                font-weight: 600;
                font-size: 1.1rem;

                @media (max-width: 796px){
                    margin-top: 30px;                    
                }
            }

            h1{
                font-size: clamp(2rem, 2.5vw, 2rem);
                color: ${props => props.theme.ligthText};
                margin: 20px 0;
            }

            p{
                color: ${props => props.theme.ligthText};
                line-height: 30px;;
            }
            .link{
                font-size: 1.2rem;
                color:  ${props => props.theme.primaryColor};
            }
        }
    }

    .grid-servicos{
        margin-top: 50px;
    
        .coluna-grid{
            height: 250px;
            background: #fff;
            border: 1px solid #CDCDCD;
            padding: 50px 20px;

            display: flex;
            flex-direction: column;
            justify-content: space-around;
            
            h5{
                font-size: 1rem;
            }

            p{
                font-size: .9rem;
                color: ${props => props.theme.ligthText};
            }

            @media (max-width: 500px){
                height: fit-content;
            }


        }

        @media (min-width: 1200px){
            width: 65%;
            margin-top: -50px;
        }


        .title-grid{
            background: #E93F48;
            color: #fff;
        }
    }
`

