import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerSC, LogoImg } from "./style";
import logo from "../../assets/img/logo.png"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        
        console.log(`e-mail => ${email}`)
        console.log(`senha => ${password}`)
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
