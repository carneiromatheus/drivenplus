import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContainerSC, LogoImg } from "./style";
import logo from "../../assets/img/logo.png"
import AuthContext from "../../contexts/AuthContext";
import api from "../../services/api";

export default function LoginPage() {
    const { setAndPersistToken } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [membership, setMembership] = useState('')


    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const user = { email, password }
        const promise = api.login({ ...user })

        promise.then(response => {
            setAndPersistToken(response.data.token)
            setMembership(response.data.membership)
            
            console.log(response.data)
            console.log(`e-mail = ${email}`)
            console.log(`senha = ${password}`)
            console.log(`plano = ${membership}`)
            console.log(`token = ${response.data.token}`)

            { membership === '' ? navigate('/subscriptions') : navigate('/home') }
        })

        promise.catch(err => alert(err.response.data.message))
    }

    return (
        <ContainerSC>
            <LogoImg src={logo} alt="logo" />

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Entrar</button>
            </form>

            <Link to="/sign-up">Não possuí uma conta? Cadastre-se</Link>
        </ContainerSC>
    )
}
