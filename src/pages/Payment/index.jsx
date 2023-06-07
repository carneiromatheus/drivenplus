import back from "../../assets/img/backButton.png";
import Plan from "./ChosenPlan";
import Form from "./CardForm";
import Confirm from "./paymentConfirm";
import { ContainerSC, NavBarSC } from "./style";

export default function PaymentPage() {
    return (
        <ContainerSC>
            <NavBarSC>
                <a href="">
                    <img src={back} alt="backArrow" />
                </a>
            </NavBarSC>
            <Plan />
            <Form />
            <Confirm />
        </ContainerSC>
    )
}