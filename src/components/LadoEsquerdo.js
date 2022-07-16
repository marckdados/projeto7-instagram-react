import CaixaStories from "./CaixaStories";
import Posts from "./Posts";
export default function LadoEsquerdo() {
  const posts = [
    {
      nomeUsuario: "claudio",
      imagemPost:
        "https://images.unsplash.com/photo-1657828514003-97c32496979a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      nomeUsuario: "ratinhoo",
      imagemPost:
        "https://images.unsplash.com/photo-1657788913477-268657a2ea29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1655&q=80",
    },
    {
      nomeUsuario: "xaropinhoo",
      imagemPost:
        "https://images.unsplash.com/photo-1657664049378-c8aadfe323f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];
  return (
    <div class="esquerdo">
      <CaixaStories />
      {posts.map((post) => (
        <Posts src={post.imagemPost} usuario={post.nomeUsuario} />
      ))}
    </div>
  );
}
