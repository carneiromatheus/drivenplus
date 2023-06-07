import { ContainerSC } from "./style";

export default function RegisterPage() {
    return (
        <ContainerSC>
            <form>
                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                <input type="text" name="cpf" id="cpf" placeholder="CPF"/>
                <input type="email" name="email" id="email" placeholder="e-mail" />
                <input type="password" name="senha" id="senha" placeholder="senha" />
                <button type="submit">Cadastrar</button>
            </form>

            <a href="/">Já possuí uma conta? Entre</a>
        </ContainerSC>
    )
}