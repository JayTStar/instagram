import Users from "./Users"
import Suggestions from "./Suggestions"

export default function Sidebar(props){
    return(<aside>
        <div id="profile">
                <img src="../midias/abuela/profile.png"/>
                <p id="usuario">
                    <span id="username">Abuela.Madrigal</span>
                    <span id="name">Alma Madrigal</span>
                </p>
        </div>
        <p id="sugestao">Sugestões para você <span id="verTudo">Ver tudo</span></p>
        <ul>
        {Users[1].map(usuario => <Suggestions name={usuario.username} profile={usuario.profilepic}/>)}
        </ul>
    </aside>)
}