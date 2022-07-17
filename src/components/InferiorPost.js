import IconsPosts from "./IconsPosts";

export default function InferiorPost(props) {
  return (
    <div class="inferior">
      <div class="icones-inferior">
        <IconsPosts
          iconUm="heart-outline"
          iconDois="chatbubble-outline"
          iconTres="paper-plane-outline"
        />
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>
      <div class="comentarios">
        <img src={props.imagemUsuarioInteracao} alt="a" />
        <span>
          Curtido por <a href="a">{props.usuarioInteracao}</a> e{" "}
          <a href="a">outras 101.523 pessoas</a>
        </span>
      </div>
    </div>
  );
}
