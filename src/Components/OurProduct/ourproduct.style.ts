import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
`

export const ProductTxt = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 80px;
    

    @media (min-width: 796px){
        display: flex;
        justify-content: center;
        align-items: center;
        height: fit-content;
    }

    .left-side{
        width: 100%;
        height: fit-content;
        

        h6{
            text-transform: uppercase;
            color: ${props=> props.theme.primaryColor};
            font-weight: 600;
            font-size: 1.1rem;
        }

        h1{
            font-size: clamp(2rem, 2.5vw, 2rem);
            color: ${props=> props.theme.ligthText};
            margin: 20px 0;
        }

        p{
            color: ${props=> props.theme.ligthText};
            line-height: 30px;;
        }
    }

    .right-side{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;


        img{
            width: 400px;


            @media (max-width: 500px){
                width: 90%;
                
            }
        }
    }

`

export const GridProducts = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 80px;

    .row{
        width: 100%;
        height: fit-content;
        display: flex;

        .item-coluna{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            img{
                width: 200px;

                @media (max-width: 600px){
                    width: 40%;
                }
            }

            p{
                color: #4d4d4d;
                margin: 25px 0;
                text-align: center;
            }

            button{
                padding: 6px 28px;
                border-radius: 5px;
                color: ${props=> props.theme.defaultColor};
                border: none;
            }

            .btn-blue{
                background: ${props=> props.theme.colorAmaze};
            }

            .btn-green{
                background: ${props=> props.theme.colorMarvel};
            }

            .btn-orange{
                background: ${props=> props.theme.primaryColor};
            }
        }

        .middle-column{
            img{
                @media (max-width: 600px){
                    margin-top: 50px;
                }
            }

            button{
                padding: 6px 28px;
                border-radius: 5px;

                @media (max-width: 600px){
                    margin-bottom: 50px;
                }
            }
        }
    }
`