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
        </div>
    </aside>
    )
}