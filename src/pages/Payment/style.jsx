import styled from "styled-components"

const ContainerSC = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NavBarSC = styled.nav`
    padding-top: 24px;
    padding-left: 22px;

    position: fixed;
    top: 0;
    left: 0;
`

export { ContainerSC, NavBarSC }