import Topo from "./Topo"
import Posts from "./Posts"
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function App(){
    return(
        <div>
            <Topo />
            <Stories/>
            <Posts/>
            <Sidebar />
        </div>
    );
}