export default function Topo() {
  return (
    <div class="topo">
      <div>
        <ion-icon name="logo-instagram"></ion-icon>
        <div class="barra"></div>
        <img
          src="https://raw.githubusercontent.com/marckdados/projeto_02_instagram/main/images/logo.png"
          alt=""
        />
      </div>
      <div>
        <input class="pesquisa" type="text" placeholder="Pesquisa" />
      </div>
      <div>
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
  );
}
