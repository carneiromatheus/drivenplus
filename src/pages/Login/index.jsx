import { ContainerSC, LogoImg } from "./style";
import logo from "../../assets/img/logo.png"

export default function LoginPage() {
    return (
        <ContainerSC>
            <LogoImg src={logo} alt="logo" />

            <form>
                <input type="email" name="email" id="email" placeholder="e-mail" />
                <input type="password" name="senha" id="senha" placeholder="senha" />
                <button type="submit">Entrar</button>
            </form>

            <a href="/sign-up">Não possuí uma conta? Cadastre-se</a>
        </ContainerSC>
    )
}
