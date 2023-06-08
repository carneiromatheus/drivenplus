import { BannerPlanSC, CardSC, PrecoSC } from './style'

export default function PlanCards({plan}) {
    return (
        <CardSC>
            <BannerPlanSC src={plan.image} alt="banner" />
            <PrecoSC>R$ {plan.price}</PrecoSC>
        </CardSC>
    )
}