import back from "../../assets/img/backButton.png";
import Plan from "./ChosenPlan";
import Form from "./CardForm";
import Confirm from "./paymentConfirm";
import { ContainerSC, NavBarSC } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PaymentPage() {
    const [displayConfirm, setDisplayConfirm] = useState(false)

    return (
        <ContainerSC>
            <NavBarSC>
                <Link to="/subscriptions">
                    <img src={back} alt="backArrow" />
                </Link>
            </NavBarSC>
            <Plan />
            <Form displayConfirm={displayConfirm} setDisplayConfirm={setDisplayConfirm} />
            {displayConfirm && <Confirm />}
        </ContainerSC>
    )
}