import { ContainerSC, TitleSC } from "./style";
import PlanCards from "./PlanCard";
import { useContext, useEffect, useState } from 'react'
import api from '../../services/api'
import AuthContext from '../../contexts/AuthContext'


export default function SubscriptionPage() {
    const { userDate } = useContext(AuthContext)
    const [plans, setPlans] = useState([])


    function loadListPlans(token) {
        const promise = api.getListPlans(token)

        promise.then(response => {
            setPlans(response.data)
        })
    }

    useEffect(() => {
        loadListPlans(userDate.token)
    }, [])

    return (
        <ContainerSC>
            <TitleSC>Escolha seu Plano</TitleSC>
            {plans.map(plan => <PlanCards key={plan.id} id={plan.id} plan={plan} /> )}
        </ContainerSC>
    )
}