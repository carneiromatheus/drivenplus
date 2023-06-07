import white from '../../../assets/img/logoWhite.png'
import yellow from '../../../assets/img/logoYellow.png'
import green from '../../../assets/img/logoGreen.png'

import { BannerPlanSC, CardSC, PrecoSC, TitleSC } from './style'

export default function PlanCards() {
    return (
        <>
            <TitleSC>Escolha seu Plano</TitleSC>

            <CardSC>
                <BannerPlanSC src={white} alt="banner" />
                <PrecoSC>R$ 39,99</PrecoSC>
            </CardSC>

            <CardSC>
                <BannerPlanSC src={yellow} alt="banner" />
                <PrecoSC>R$ 69,90</PrecoSC>
            </CardSC>

            <CardSC>
                <BannerPlanSC src={green} alt="banner" />
                <PrecoSC>R$ 99,99</PrecoSC>
            </CardSC>
        </>
    )
}