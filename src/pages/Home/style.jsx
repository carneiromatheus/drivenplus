import styled from "styled-components"

const ContainerSC = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .red {
        background-color: rgba(255, 71, 71, 0.9);
        
        &:hover {
            background-color: rgb(255, 71, 71);
        }
    }

    nav {
        width: 100vw;

        margin-bottom: 40px;

        display: flex;
        justify-content: space-between;
    }

    header {
        width: 100vw;
    }
    
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 8px;
    }

    footer {
        position: fixed;
        bottom: 0;

        margin-bottom: 12px;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`


const BannerSC = styled.img`
    width: 50px;
    height: 50px;
    
    margin-top: 32px;
    margin-left: 38px;
`


const UserSC = styled.img`
    width: 34px;
    height: 34px;
    
    margin-top: 22px;
    margin-right: 22px;
`

const TitleSC = styled.h1`
    font-weight: 700;
    font-size: 24px;
    margin-top: 12px;
    margin-bottom: 53px;
`

export { BannerSC, ContainerSC, TitleSC, UserSC };