import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    background: #353947;


    .row{
        margin: 0 auto;
        padding-bottom: 50px;

        @media (min-width: 796px){
            height: 450px;
            padding-bottom: 0;             
        }

        .coluna{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;



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
                color: ${props => props.theme.defaultColor};
                margin: 20px 0;
            }

            p{
                color: ${props => props.theme.defaultColor};
            }

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
    }
        }
`