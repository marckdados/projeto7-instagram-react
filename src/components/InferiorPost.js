import React from "react";

export default function InferiorPost(props) {
  const valorInicial = props.numeroCurtidas;
  const [contador, setContador] = React.useState(valorInicial);
  const [tipo, setTipo] = React.useState("heart-outline");
  const [cor, setCor] = React.useState("cor-inicial");

  function alterarNumeroCurtidas() {
    if (contador === valorInicial) {
      setContador(contador + 1);
      setTipo("heart");
      setCor("md hydrated cor-clicada");
    } else {
      setContador(contador - 1);
      setTipo("heart-outline");
      setCor("md hydrated cor-inicial");
    }
  }

  return (
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
  );
}
