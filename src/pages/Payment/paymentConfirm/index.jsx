import close from '../../../assets/img/closeButton.png'
import { BlurSC, NavBarSC, QuestionCard } from "./style";

export default function Confirm({ plan, setDisplayConfirm }) {
    return (
        <BlurSC>
            <NavBarSC>
                <img onClick={() => setDisplayConfirm(false)} src={close} alt="close" />
            </NavBarSC>
            <QuestionCard>
                <p>Tem certeza que deseja assinar o plano {<br />}{plan.name} (R$ {plan.price})?</p>
                <section>
                    <button className='gray' onClick={() => setDisplayConfirm(false)}>NÃO</button>
                    <button>SIM</button>
                </section>
            </QuestionCard>
        </BlurSC>
    )
}