import InferiorPost from "./InferiorPost";
import SuperiorPost from "./SuperiorPost";

export default function Posts(props) {
  return (
    <div class="caixa-posts">
      <div class="post">
        <SuperiorPost
          imagemUsuario={props.imagemUsuario}
          usuarioPost={props.usuarioPost}
        />
        <img class="foto-post" src={props.src} alt="oi" />
        <InferiorPost
          usuarioInteracao={props.usuarioInteracao}
          imagemUsuarioInteracao={props.imagemUsuarioInteracao}
          numeroCurtidas={props.numeroCurtidas}
        />
      </div>
    </div>
  );
}
