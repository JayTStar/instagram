export default function Suggestions(props){
    return(<div class="suggestionUser">
        <img src={props.profile}/>
        <div>
            <p class="username">{props.name}</p>
            <p class="status">Novo no Instagram</p>
        </div>
        <p class="seguir">Seguir</p>
    </div>)
}