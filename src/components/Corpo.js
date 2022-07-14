import LadoEsquerdo from "./LadoEsquerdo";
import LadoDireito from "./LadoDireito";

export default function Corpo() {
  return (
    <div class="conteudo">
      <LadoEsquerdo />
      <LadoDireito />
    </div>
  );
}
