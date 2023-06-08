import { BannerPlanSC, DescriptionPlanSC, DetailSC, IconSC, ListDetailsSC, SummarySC, TitleSC } from "./style";
import clipboard from '../../../assets/img/clipboardIcon.png'
import money from '../../../assets/img/moneyIcon.png'

export default function Plan() {
    return (
        <>
            <BannerPlanSC >
                <img src={"white"} alt="banner" />
                <TitleSC>Driven Plus</TitleSC>
            </BannerPlanSC>

            <DescriptionPlanSC>
                <section>
                    <header>
                        <IconSC src={clipboard} alt="icon" />
                        <SummarySC>Benefícios:</SummarySC>
                    </header>
                    <ListDetailsSC>
                        <DetailSC>Brinde exclusivos</DetailSC>
                        <DetailSC>Materiais bônus de web</DetailSC>
                    </ListDetailsSC>
                </section>

                <section>
                    <header>
                        <IconSC src={money} alt="icon" />
                        <SummarySC>Preço:</SummarySC>
                    </header>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </section>
            </DescriptionPlanSC>
        </>
    )
}