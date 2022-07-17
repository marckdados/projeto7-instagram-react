import CaixaStories from "./CaixaStories";
import Posts from "./Posts";
export default function LadoEsquerdo() {
  const posts = [
    {
      //Usuario parte Superior
      usuarioPost: [
        {
          nomeUsuario: "gabys",
          imagemUsuario:
            "https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      //Imagem do Post
      imagemPost:
        "https://images.unsplash.com/photo-1657828514003-97c32496979a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      //Usuario parte Inferior
      usuarioInteracao: [
        {
          nomeUsuarioInteracao: "gabigol",
          imagemUsuarioInteracao:
            "https://images.pexels.com/photos/12740933/pexels-photo-12740933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          numeroCurtidas: 2290,
        },
      ],
    },
    {
      //Usuario parte Superior
      usuarioPost: [
        {
          nomeUsuario: "gabys",
          imagemUsuario:
            "https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      //Imagem do Post
      imagemPost:
        "https://images.unsplash.com/photo-1657828514003-97c32496979a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      //Usuario parte Inferior
      usuarioInteracao: [
        {
          nomeUsuarioInteracao: "gabigol",
          imagemUsuarioInteracao:
            "https://images.pexels.com/photos/12740933/pexels-photo-12740933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          numeroCurtidas: 605,
        },
      ],
    },
    {
      //Usuario parte Superior
      usuarioPost: [
        {
          nomeUsuario: "gabys",
          imagemUsuario:
            "https://images.pexels.com/photos/12823101/pexels-photo-12823101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ],
      //Imagem do Post
      imagemPost:
        "https://images.unsplash.com/photo-1657828514003-97c32496979a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      //Usuario parte Inferior
      usuarioInteracao: [
        {
          nomeUsuarioInteracao: "gabigol",
          imagemUsuarioInteracao:
            "https://images.pexels.com/photos/12740933/pexels-photo-12740933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          numeroCurtidas: 325,
        },
      ],
    },
  ];
  return (
    <div class="esquerdo">
      <CaixaStories />
      {posts.map((post) => (
        <Posts
          src={post.imagemPost}
          usuarioPost={post.usuarioPost[0].nomeUsuario}
          imagemUsuario={post.usuarioPost[0].imagemUsuario}
          usuarioInteracao={post.usuarioInteracao[0].nomeUsuarioInteracao}
          imagemUsuarioInteracao={
            post.usuarioInteracao[0].imagemUsuarioInteracao
          }
          numeroCurtidas={post.usuarioInteracao[0].numeroCurtidas}
        />
      ))}
    </div>
  );
}
