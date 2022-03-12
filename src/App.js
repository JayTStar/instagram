import Topo from "./Topo"
import Users from "./Users"
import Post from "./Post"
import Sidebar from "./Sidebar";

export default function App(){
    return(
        <div>
            <Topo />
            <main>
                {Users[0].map(usuario => <Post name={usuario.username} profile={usuario.profilepic} post={usuario.postpic} />)}
            </main>
                <Sidebar />
        </div>
    );
}