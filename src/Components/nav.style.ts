import styled from "styled-components"

interface Props {
    isOpen: boolean;
}


export const Wrapper = styled.header`
    width: 100%;
    height: 50px;
    background-color: #CDCDCD;
    position: relative;
    z-index:10;
`

export const Nav = styled.header`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const WrapperLogo = styled.div`
    width: 38%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 180px;
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

`
export const SideBar = styled.div.attrs((props: Props) => {
    return {
        isOpen: props.isOpen,  // <-- add this line
        style: {
            left: props.isOpen? '0' : '-2000px'
        },
    };
})`

    width: 280px;
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
                color: ${props => props.theme.LightText};
                font-size: .9rem;
            }
        }
    }
`