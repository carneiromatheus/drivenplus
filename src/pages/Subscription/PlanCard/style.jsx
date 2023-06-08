import styled from "styled-components";

const CardSC = styled.div`
    width: 290px;
    height: 180px;

    margin-bottom: 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border: 3px solid #7e7e7e;
    border-radius: 12px;
    
    :hover {
        width: 295px;
        height: 185px;
    }
`

const BannerPlanSC = styled.img`
    width: 92px;
    height: 95px;
`

const PrecoSC = styled.p`
    font-size: 24px;
    font-weight: 700;
`

export { CardSC, BannerPlanSC, PrecoSC }