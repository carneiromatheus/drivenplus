import { useContext, useEffect, useState } from 'react';
import userIcon from '../../assets/img/userIcon.png'

import { BannerSC, ContainerSC, TitleSC, UserSC } from "./style";
import AuthContext from '../../contexts/AuthContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

export default function HomePage() {
    const { userDate } = useContext(AuthContext)
    const [plan, setPlan] = useState(undefined)
    const navigate = useNavigate()

    const planId = useParams()

    function deletePlan(token) {
        const promise = api.deletePlan(token)

        promise.then(() => navigate("/subscriptions"))
        promise.catch(err => alert(err.response.message))
    }

    function loadPlan(token, id) {
        const promise = api.getPlan(token, id)

        promise.then(response => {
            setPlan(response.data)
        })

        promise.catch(err => alert(err.response.data.message))
    }

    useEffect(() => {
        loadPlan(userDate.token, planId.id)
    }, [])

    return (
        <ContainerSC>
            {plan === undefined ? <main>Carregando...</main> :
                <>
                    <nav>
                        <BannerSC src={plan.image} alt="banner" />
                        <UserSC src={userIcon} alt="user" />
                    </nav>

                    <TitleSC>Olá, {userDate.name}</TitleSC>

                    <main>
                        {plan.perks.map((i) => <Link to={i.link} target="_blank" key={i.id}> <button>{i.title}</button> </Link>)}
                    </main>
                </>
            }

            <footer>
                <Link to="/subscriptions"><button>Mudar plano</button></Link>
                <button type='button' onClick={() => deletePlan(userDate.token)} className="red">Cancelar plano</button>
            </footer>
        </ContainerSC>
    )
}