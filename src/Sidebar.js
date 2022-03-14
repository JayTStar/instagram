import Users from "./Users"
import Suggestions from "./Suggestions"

export default function Sidebar(props){
    return(
    <aside>
        <div>
            <div id="profile">
                    <img src={Users[1][0].profilepic}/>
                    <p id="usuario">
                        <span id="username">{Users[1][0].username}</span>
                        <span id="name">{Users[1][0].name}</span>
                    </p>
            </div>
            <p id="sugestao">Sugestões para você <span id="verTudo">Ver tudo</span></p>
            <ul>
            {Users[2].map(usuario => <Suggestions name={usuario.username} profile={usuario.profilepic}/>)}
            </ul>

            <p id="sobre">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma
                </p>
                <p id="instagram">
                    © 2021 INSTAGRAM DO FACEBOOK
                </p>
        </div>
    </aside>
    )
}