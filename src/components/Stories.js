export default function Stories(props) {
  return (
    <div>
      <img class="foto-stories" src={props.userPhoto} alt="oi" />
      <span>{props.username}</span>
    </div>
  );
}
