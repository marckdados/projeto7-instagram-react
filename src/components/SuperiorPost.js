export default function SuperiorPost(props) {
  return (
    <div class="superior">
      <div>
        <img src={props.imagemUsuario} alt="" />
        <span>{props.usuarioPost}</span>
      </div>
      <div class="more">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
