import styled from "styled-components"

const BlurSC = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0,0.7);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`

const NavBarSC = styled.nav`
    padding-top: 24px;
    padding-right: 20px;

    position: fixed;
    top: 0;
    right: 0;
`

const QuestionCard =styled.div`
    width: 248px;
    height: 210px;

    padding-top: 33px;
    padding-left: 22px;
    padding-right: 22px;
    padding-bottom: 11px;

    display: flex;
    flex-direction: column;
    gap: 47px;

    background: #FFFFFF;
    border-radius: 12px;

    p {
        font-size: 18px;
        line-height: 21px;
        font-weight: 700;
        text-align: center;
        color: #000;
    }
    
    section {
        display: flex;
        gap: 14px;
    }

    button {
        width: 95px;
        height: 52px;

        border-radius: 8px;

        &.gray {
            background: #CECECE;
        }
    }
`

export { BlurSC, NavBarSC, QuestionCard };