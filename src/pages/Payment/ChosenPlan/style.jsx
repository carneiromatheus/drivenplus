import styled from "styled-components"

const BannerPlanSC = styled.div`
    height: 145px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    img {
        width: 102px;
        height: 95px;
    }
`

const TitleSC = styled.h1`
    font-weight: 700;
    font-size: 32px;
    color: #fff;
    text-align: center;
`

const DescriptionPlanSC = styled.div`
    margin-top: 10px;
    margin-bottom: 34px;

    header {
        margin-top: 12px;
        margin-bottom: 10px;

        display: flex;
        align-items: center;
        gap: 5px;
    }

    p {
        margin-left: 20px;
    }
`

const ListDetailsSC = styled.ol`
    list-style: decimal;
`

const DetailSC = styled.li`
    margin-left: 30px;
    padding: 4px;
`

const SummarySC = styled.h2`
    font-size: 16px;
`

const IconSC = styled.img`
    width: 14px;
    height: 16px;
`

export { BannerPlanSC, DescriptionPlanSC, DetailSC, IconSC, ListDetailsSC, SummarySC, TitleSC }