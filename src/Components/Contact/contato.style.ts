import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;

    .container{
        margin: 0 auto;

        .coluna{
            height: fit-content;

            /* @media (min-width: 796px){
                height: 600px;
            } */

            h1{
                color: #333;
            }

            p{
                font-size: clamp(1rem, 2.5vw, 1.1rem);
                margin: 20px auto;
                color: ${props => props.theme.ligthText};
                font-weight: lighter;
                line-height: 35px;
            }

        }

        .coluna-txt{
            padding-bottom: 90px;
        }

        .coluna-form{
            background: #EEEEEE;

            form{
                width: 100%;
                padding: 50px 0;
                input{
                    width: 100%;
                    height: 55px;
                    padding-left: 15px;
                    border-radius: 5px;
                    border: none;
                    outline: none;
                    margin: 20px auto;
                }

                textarea{
                    width: 100%;
                    min-height: 200px;
                    margin: 20px auto;
                    padding: 15px;
                    border-radius: 5px;
                }

                button{
                    width: 100%;
                    background: #E93F48;
                    color: #fff;
                    padding: 12px 0;
                    text-transform: uppercase;
                    border: none;
                    border-radius: 5px;;
                }
            }
        }

    }
`