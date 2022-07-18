export default function OutrosUsuarios(props) {
  return (
    <div class="outro">
      <div>
        <img src={props.imagem} alt="" />
      </div>
      <div>
        <span>{props.nome}</span>
        <p>Segue você</p>
      </div>
      <div class="div-seguir">
        <span class="seguir">Seguir</span>
      </div>
    </div>
  );
}
