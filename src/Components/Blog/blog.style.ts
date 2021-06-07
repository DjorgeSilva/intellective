import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    background: #fff;
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
                color: ${props => props.theme.primaryColor};
            }

            p{
                margin: 20px auto;
                color: ${props => props.theme.ligthText};
                text-align: center;
            }
        }

        .coluna-grid{
            margin-top: 80px;
            
            .wrapper-img{
                width: 100%;

                img{
                    width: 100%;
                }
            }

            .wrapper-txt{
                width: 100%;
                margin: 20px auto;
                
                .links{
                    color: ${props => props.theme.ligthText};

                    &:hover{
                        color: ${props => props.theme.primaryColor};
                    }
                }
            }

            .wrapper-links{
                width: 100%;
                margin: 10px auto;

                h6{
                    font-size: 1.2rem;
                    color: ${props => props.theme.primaryColor};
                    
                    &:hover{
                        color: ${props => props.theme.primaryColor};
                    }
                } 

                .h6{
                    font-size: 1.5rem;
                    color: #333;
                }  

                .link-readMore{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    color: ${props => props.theme.primaryColor};
                    margin-top: 20px;

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
            }
            }
        }
    }
`