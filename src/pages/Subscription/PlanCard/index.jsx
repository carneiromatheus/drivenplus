import { useNavigate } from 'react-router-dom'
import { BannerPlanSC, CardSC, PrecoSC } from './style'

export default function PlanCards({ plan }) {
    const navigate = useNavigate()
    
    return (
        <CardSC onClick={()=>navigate(`/subscriptions/${plan.id}`)}>
            <BannerPlanSC src={plan.image} alt="banner" />
            <PrecoSC>R$ {plan.price}</PrecoSC>
        </CardSC>
    )
}