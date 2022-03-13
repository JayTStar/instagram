import Post from "./Post";
import Users from "./Users"
export default function Posts(){
    return(
        <div id="posts">
            {Users[0].map(usuario => <Post name={usuario.username} profile={usuario.profilepic} post={usuario.postpic} />)}
        </div>
    )
}