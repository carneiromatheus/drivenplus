import { SmallInputSC } from "./style";

export default function Form() {
    return (
        <form>
            <input type="text" name="name" id="name" placeholder="Nome impresso no cartão" />
            <input type="text" name="digitos" id="digitos" placeholder="Dígitos do cartão" />
            <SmallInputSC>
                <input type="text" name="codigo" id="codigo" placeholder="Código de segurança" />
                <input type="text" name="validade" id="validade" placeholder="Validade" />
            </SmallInputSC>
            <button type="submit">ASSINAR</button>
        </form>
    )
}