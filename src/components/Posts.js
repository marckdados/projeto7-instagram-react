import InferiorPost from "./InferiorPost";
import SuperiorPost from "./SuperiorPost";

export default function Posts(props) {
  return (
    <div class="caixa-posts">
      <div class="post">
        <SuperiorPost />
        <img class="foto-post" src={props.src} alt="oi" />
        <InferiorPost usuario={props.usuario} />
      </div>
    </div>
  );
}
