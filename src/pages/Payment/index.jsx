import { ContainerSC, NavBarSC, SmallInputSC } from "./style";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";
import back from "../../assets/img/backButton.png";
import Plan from "./ChosenPlan";
import Confirm from "./paymentConfirm";

export default function PaymentPage() {
    const { userDate } = useContext(AuthContext)
    const { idPlan } = useParams()
    const [plan, setPlan] = useState([])
    const [displayConfirm, setDisplayConfirm] = useState(false)

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [securityNumber, setSecurityNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const newSubscription = { membershipId: idPlan, cardName, cardNumber, securityNumber, expirationDate }
        const promise = api.subscription({ ...newSubscription }, userDate.token)

        promise.then((response) => {
            console.log(`membershipId = ${idPlan}`)
            console.log(`Nome no cartão = ${cardName}`)
            console.log(`Numero do cartão = ${cardNumber}`)
            console.log(`Código de segurança = ${securityNumber}`)
            console.log(`Data de vencimento = ${expirationDate}`)

            navigate('/home')
        })
        promise.catch(err => alert(err.response.data.message))
    }

    function loadPlan(token) {
        const promise = api.getPlan(token, idPlan)

        console.log(`id selecionado = ${idPlan}`)

        promise.then(response => {
            setPlan(response.data)
        })
    }

    useEffect(() => {
        loadPlan(userDate.token)
    }, [])

    return (
        <ContainerSC>
            <NavBarSC>
                <Link to="/subscriptions">
                    <img src={back} alt="backArrow" />
                </Link>
            </NavBarSC>

            <Plan plan={plan} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome impresso no cartão"
                    value={cardName}
                    onChange={e => setCardName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Dígitos do cartão"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    required
                />

                <SmallInputSC>
                    <input
                        type="text"
                        placeholder="Código de segurança"
                        value={securityNumber}
                        onChange={e => setSecurityNumber(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Validade"
                        value={expirationDate}
                        onChange={e => setExpirationDate(e.target.value)}
                        required
                    />
                </SmallInputSC>
                {displayConfirm && <Confirm plan={plan} setDisplayConfirm={setDisplayConfirm} />}
            </form>
            <button onClick={() => setDisplayConfirm(true)}>ASSINAR</button>

        </ContainerSC>
    )
}