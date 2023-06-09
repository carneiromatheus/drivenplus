import styled from "styled-components"

const ContainerSC = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        margin-top: 20px;
    }
`

const NavBarSC = styled.nav`
    padding-top: 24px;
    padding-left: 22px;

    position: fixed;
    top: 0;
    left: 0;
`

const SmallInputSC = styled.section`
    display: flex;
    gap: 9px;

    input {
        width: 145px;
        height: 52px;
        padding: 10px;
    }
`

export { ContainerSC, NavBarSC, SmallInputSC }