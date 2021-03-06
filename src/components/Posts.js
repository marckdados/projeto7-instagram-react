import React from "react";
import SuperiorPost from "./SuperiorPost";

export default function Posts(props) {
  const coracaoContorno = "heart-outline";
  const coracao = "heart";
  const valorInicial = props.numeroCurtidas;
  const [contador, setContador] = React.useState(valorInicial);
  const [tipo, setTipo] = React.useState(coracaoContorno);
  const [cor, setCor] = React.useState("cor-inicial");

  function alterarNumeroCurtidas() {
    if (contador === valorInicial) {
      setContador(contador + 1);
      setTipo(coracao);
      setCor("md hydrated cor-clicada");
    } else {
      setContador(contador - 1);
      setTipo(coracaoContorno);
      setCor("md hydrated cor-inicial");
    }
  }

  function alterarNumeroCurtidasPost() {
    if (contador === valorInicial) {
      setContador(contador + 1);
      setTipo(coracao);
      setCor("md hydrated cor-clicada");
    }
  }
  return (
    <div class="caixa-posts">
      <div class="post">
        <SuperiorPost
          imagemUsuario={props.imagemUsuario}
          usuarioPost={props.usuarioPost}
        />
        <img
          class="foto-post"
          onClick={() => {
            alterarNumeroCurtidasPost();
          }}
          src={props.src}
          alt="oi"
        />
        <div class="inferior">
          <div class="icones-inferior">
            <div className="coracao">
              <ion-icon
                onClick={() => {
                  alterarNumeroCurtidas();
                }}
                class={cor}
                name={tipo}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>
          <div class="comentarios">
            <img src={props.imagemUsuarioInteracao} alt="a" />
            <span>
              Curtido por <a href="a">{props.usuarioInteracao}</a> e{" "}
              <a href="a">outras {contador} pessoas</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
