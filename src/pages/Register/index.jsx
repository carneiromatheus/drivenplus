import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContainerSC } from "./style";
import api from "../../services/api";

export default function RegisterPage() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        console.log(`nome = ${name}`)
        console.log(`CPF = ${cpf}`)
        console.log(`e-mail = ${email}`)
        console.log(`senha = ${password}`)

        const newUser = { name, cpf, email, password }
        const promise = api.signUp({ ...newUser })

        promise.then(() => {
            alert("Usuário cadastrado!")
            navigate('/')
        })
        promise.catch(err => alert(err.response.data.message))
    }

    return (
        <ContainerSC>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />
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

                <button type="submit">Cadastrar</button>
            </form>

            <Link to="/">Já possuí uma conta? Entre</Link>
        </ContainerSC>
    )
}