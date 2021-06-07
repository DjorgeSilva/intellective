import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    background: #F3F3F3;
    padding-top: 30px;

    .row{
        margin: 0 auto;
        padding-bottom: 50px;

        .coluna{
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1{
                color: ${props => props.theme.ligthText};
            }

            p{
                margin: 20px auto;
                color: ${props => props.theme.ligthText};
            }

        }

        .coluna-imagem{
            height: 450px;
            padding: 0;
            align-items: flex-start;

            img{
                width: 100%;
                height: 80%;
                object-fit: cover;
                border-radius: 10px;
                margin-top: 50px;
                position: relative;
            }

            .inner-info-img{
                position: absolute;
                top: 80px;
                left: 30px;
                z-index: 10000;
                background: #F3F3F3;
                border-radius: 10px;
                padding: 0 10px;
                text-align: center;

                p{
                    font-size: .8rem;
                }
            }

            p, h5, h6{
                &:hover{
                    color: ${props => props.theme.primaryColor};
                }
            }

            h5{
                color: ${props => props.theme.darkText};
            }

            h6{
                color: ${props => props.theme.primaryColor};
                margin-top: 10px;
                font-size: 1.2rem;
            }

            .link-readMore{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                &:hover .icone-link{
                    animation: linkicone 1s;
                }

                .icone-link{
                    color: ${props => props.theme.primaryColor};
                    font-size: 1.8rem;
                    margin-left: 5px;
                }

                @keyframes linkicone {
                        0%{
                            position: absolute;
                            opacity: 0;
                            left: 0px;
                        }

                        100%{
                            opacity: 1;
                        }
                }

                h6{
                    background: #F3F3F3;
                    z-index: 100;
                }
            }


        }
    }
`