import { useContext } from 'react';
import userIcon from '../../assets/img/userIcon.png'

import { BannerSC, ContainerSC, TitleSC, UserSC } from "./style";
import AuthContext from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function HomePage() {
    const { userDate, planDate } = useContext(AuthContext)
    console.log(planDate)

    return (
        <ContainerSC>
            <nav>
                <BannerSC src={planDate.membership.image} alt="banner" />
                <UserSC src={userIcon} alt="user" />
            </nav>

            <TitleSC>Olá, {userDate.name}</TitleSC>

            <main>
                {planDate.membership.perks.map((i) => <Link to={i.link} target="_blank"> <button key={i.title}>{i.title}</button> </Link>)}
            </main>

            <footer>
                <Link to="/subscriptions"><button>Mudar plano</button></Link>
                <button className="red">Cancelar plano</button>
            </footer>
        </ContainerSC>
    )
}