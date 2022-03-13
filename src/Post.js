export default function Post(props){

    return(
        <div class="post">
                    <div class="profile">
                        <img src={props.profile} alt=""/>
                        <p>{props.name}</p>
                        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                    </div>
                    <div class="imagem">
                        {(props.name === "Isabela.Madrigal") ? <video muted autoPlay loop>
                        <source src="../midias/Isabela/Isabela-e-Mirabel.mp4" type="video/mp4" />
                        <source src="../midias/Isabela/Isabela-e-Mirabel.ogv" type="video/ogg" />
                        </video> : <img src={props.post} alt=""/>}
                    </div>
                    <div class="bottom">
                        <div class="icons">
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div class="marcador">
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div class="curtidoPor">
                        <img src="../midias/Camilo/profile.jpg" alt=""/>
                        <p> Curtido por <strong>Camilo.madrigal</strong> e <strong>outras 102.956 pessoas</strong> </p>
                    </div>
                </div>
    )
}