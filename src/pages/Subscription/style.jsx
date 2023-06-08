import styled from "styled-components"

const ContainerSC = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleSC = styled.h1`
    width: 100vw;
    height: 91px;
    
    font-weight: 700;
    font-size: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 29px;
`

export { ContainerSC, TitleSC };