import userIcon from '../../assets/img/userIcon.png'

import { BannerSC, ContainerSC, TitleSC, UserSC } from "./style";

export default function HomePage() {
    return (
        <ContainerSC>
            <nav>
                <BannerSC src={"bannerPlan"} alt="banner" />
                <UserSC src={userIcon} alt="user" />
            </nav>

            <TitleSC>Olá, fulano</TitleSC>

            <main>
                <button>Solicitar brindes</button>
                <button>Material bônus da web</button>
                <button>Aulas bônus de tech</button>
                <button>Mentorias personalizadas</button>
            </main>

            <footer>
                <button>Mudar plano</button>
                <button className="red">Cancelar plano</button>
            </footer>
        </ContainerSC>
    )
}