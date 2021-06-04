import styled from "styled-components"

interface Props {
    isOpen: boolean;
    submenu: boolean;
}


export const Wrapper = styled.header`
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: relative;
    z-index:10;


     @media (min-width: 1050px){
        background: transparent;
    } 
`

export const Nav = styled.header`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1050px){
        padding-top: 55px;
    } 
`

export const WrapperLogo = styled.div`
    width: 38%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    img{
        width: 180px;
        margin-left: 10px;

        @media (max-width: 500px){
            width: 110%;
        }
    }
`

export const WrapperIconeMenu = styled.div`
    width: calc(100% - 38%);
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    .icone-menu{
        cursor: pointer;
        font-size: 2rem;
    }

    @media (min-width: 1050px){
        display: none;
    }

`


export const MenuDesktop = styled.div`
    width: calc(100% - 38%);
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul{
        width: 400px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li{
            text-transform: uppercase;
            font-size: .9rem;
            font-weight: 600;
            position: relative;

            .link{
                color: #333;
                &:hover{
                    color: ${props => props.theme.primaryColor};
                }

                &:hover + .icone-dropdown{
                    color: ${props => props.theme.primaryColor};
                } 
            }

            .icone-dropdown{
                font-size:1.3rem;
                margin-bottom: 2px;
            }
        }
    }

    @media (max-width: 1050px){
        display: none;
    }

`


export const FloatingMenu = styled.div.attrs((props: Props) => {
    return {
        submenu: props.submenu,
        style: {
            display: props.submenu? "none": "block"
        },
    };
})`
    width: 150px;
    height: 120px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #CDCDCD;

    position: absolute;
    top: 40px;
    left: -10px;

    nav{
        width: 100%;
        height: 100%;

        ul{
            width: 100%;
            height: 100%;
            padding: 0;
            padding-left: 10px;
            margin: 0;

            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;

            li{

                .link{
                    color: #333;
                    font-size: .8rem;
                    &:hover{
                        color: ${props => props.theme.primaryColor};
                    }

                    &:hover + .icone-dropdown{
                        color: ${props => props.theme.primaryColor};
                    } 
                }

            }
        }
    }
`


export const SideBar = styled.div.attrs((props: Props) => {
    return {
        isOpen: props.isOpen,
        style: {
            left: props.isOpen ? '0' : '-2000px'
        },
    };
})`

    width: 300px;
    height: 100vh;
    background-color: #fff;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;

    .icone-close{
        cursor: pointer;
        font-size: 2rem;
        position: absolute;
        top: 25px;
        right: 35px;
    }
    
    ul{
        width: 100%;
        height: 110px;
        list-style: none;

        position: absolute;
        top: 84px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        

        li{

            .link{
                text-transform: uppercase;
                font-weight: 600;
                color: #333;
                font-size: .9rem;

                &:hover{
                    color: ${props => props.theme.primaryColor};
                }
            }
        }
    }
`

