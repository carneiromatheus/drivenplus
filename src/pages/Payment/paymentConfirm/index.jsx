import close from '../../../assets/img/closeButton.png'
import { BlurSC, NavBarSC, QuestionCard } from "./style";

export default function Confirm() {
    return (
        <BlurSC>
            <NavBarSC>
                <img src={close} alt="close" />
            </NavBarSC>
            <QuestionCard>
                <p>Tem certeza que deseja assinar o plano {<br />}Driven Plus (R$ 39,99)?</p>
                <section>
                    <button className='gray'>NÃO</button>
                    <button>SIM</button>
                </section>
            </QuestionCard>
        </BlurSC>
    )
}