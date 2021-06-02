import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .txt {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-family: 'Pattaya', sans-serif;
            color: #fff;
            font-size: 2rem;
        }

        img {
            width: 230px;
            margin-bottom: 20px;
        }
    }
`

export const Loading = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .obj {
    width: 6px;
    height: 40px;
    background: #F95252;
    margin: 0 3px;
    border-radius: 10px;
    animation: loading 0.8s infinite;
    }

    .obj:nth-child(2) {
        animation-delay: 0.1s;
        background: #FFEC8D;
    }

    .obj:nth-child(3) {
        animation-delay: 0.2s;
        background: #FFECD4;
    }

    .obj:nth-child(4) {
        animation-delay: 0.3s;
        background: #CEB4F7;
    }

    .obj:nth-child(5) {
        animation-delay: 0.4s;
        background: #74DEDA;
    }

    .obj:nth-child(6) {
        animation-delay: 0.5s;
        background: rgb(236, 66, 222);
    }

    .obj:nth-child(7) {
        animation-delay: 0.6s;
        background: red;
    }

    .obj:nth-child(8) {
        animation-delay: 0.7s;
        background: rgb(11, 211, 61);
    }

    @keyframes loading {
        0% {
            height: 0;
        }
        50% {
            height: 40px;
        }
        100% {
            height: 0;
        }
    }
`