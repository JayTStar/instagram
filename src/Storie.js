export default function Storie(props){
    return(
        <div class="user">
            <img class="profile" src={props.profile}/>
            <div>
                <p class="username">{props.name}</p>
            </div>
        </div>
    )
}