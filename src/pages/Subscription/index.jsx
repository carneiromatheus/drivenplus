import { ContainerSC, TitleSC } from "./style";
import PlanCards from "./PlanCard";
import { useContext, useEffect, useState } from 'react'
import api from '../../services/api'
import AuthContext from '../../contexts/AuthContext'


export default function SubscriptionPage() {
    const { token } = useContext(AuthContext)
    const plansOnLocalStorage = localStorage.getItem("plans")
    const [plans, setPlans] = useState(JSON.parse(plansOnLocalStorage))

    function setAndPersistListPlans(plans) {
        setPlans(plans)
        localStorage.setItem("plans", JSON.stringify(plans))
    }

    function loadListPlans(token) {
        const promise = api.getListPlans(token)

        promise.then(response => {
            setAndPersistListPlans(response.data)
        })
    }

    useEffect(() => {
        loadListPlans(token)
    }, [])

    return (
        <ContainerSC>
            <TitleSC>Escolha seu Plano</TitleSC>
            {plans.map(plan => <PlanCards key={plan.id} id={plan.id} plan={plan} /> )}
        </ContainerSC>
    )
}