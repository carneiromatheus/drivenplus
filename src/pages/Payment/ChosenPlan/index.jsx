import { BannerPlanSC, DescriptionPlanSC, DetailSC, IconSC, ListDetailsSC, SummarySC, TitleSC } from "./style";
import clipboard from '../../../assets/img/clipboardIcon.png'
import money from '../../../assets/img/moneyIcon.png'

export default function Plan({ plan }) {
    const loading = plan.perks



    return (

        loading === undefined ? <BannerPlanSC>Carregando...</BannerPlanSC>:
            <>
                <BannerPlanSC >
                    <img src={plan.image} alt="banner" />
                    <TitleSC>{plan.name}</TitleSC>
                </BannerPlanSC>

                <DescriptionPlanSC>
                    <section>
                        <header>
                            <IconSC src={clipboard} alt="icon" />
                            <SummarySC>Benefícios:</SummarySC>
                        </header>
                        <ListDetailsSC>
                            {plan.perks.map((i) => <DetailSC key={i.title}>{i.title}</DetailSC>)}
                        </ListDetailsSC>
                    </section>

                    <section>
                        <header>
                            <IconSC src={money} alt="icon" />
                            <SummarySC>Preço:</SummarySC>
                        </header>
                        <p>R$ {plan.price} cobrados mensalmente</p>
                    </section>
                </DescriptionPlanSC>
            </>
    )
}