export default function Stories(props) {
  console.log(props.src);
  return (
    <div>
      <img class="foto-stores" src={props.src} alt="" />
      <span>{props.storesUsuario}</span>
    </div>
  );
}
