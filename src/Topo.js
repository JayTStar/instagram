export default function Topo(logo){
    return(
        <header>
            <div id="desktop">
                <div id="left">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div id="barraHorizontal"></div>
                    <img id="logo" src="../public/Midias/logo.png"/>
                </div>
                <div id="barraPesquisa"> <p>Pesquisar</p> </div>
                <div id="right">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
            <div id="mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img id="logo" src="./midias/logo.png"/>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
      </header>
    )
}