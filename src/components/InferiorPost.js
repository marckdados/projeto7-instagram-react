export default function InferiorPost(props) {
  return (
    <div class="inferior">
      <div class="icones-inferior">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
      <div class="comentarios">
        <img
          src="https://criticalhits.com.br/wp-content/uploads/2022/03/one-piece-manga-1044-luffy-despertar-gear-5-fanart-postcover-768x432.jpg"
          alt="a"
        />
        <span>
          Curtido por <a href="a">{props.usuario}</a> e{" "}
          <a href="a">outras 101.523 pessoas</a>
        </span>
      </div>
    </div>
  );
}
