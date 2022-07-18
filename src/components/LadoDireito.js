import OutrosUsuarios from "./OutrosUsuarios";
import PerfilUsuario from "./PerfilUsuario";

const outrosUsuarios = [
  {
    nome: "Cleber",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Pitangus_sulphuratus_3.jpg",
  },
  {
    nome: "meuloro",
    imagem:
      "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nome: "tiaomalvado",
    imagem:
      "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nome: "jubileu",
    imagem:
      "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nome: "jailsontrad",
    imagem:
      "https://images.pexels.com/photos/12793815/pexels-photo-12793815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function LadoDireito() {
  return (
    <div class="direito">
      <div class="sidebar">
        <div class="perfil-principal">
          <PerfilUsuario />
          <div class="sugestao">
            <p>Sugestão para você</p>
            <span>Ver tudo</span>
          </div>
          <div class="outros-perfies">
            {outrosUsuarios.map((usuarios) => (
              <OutrosUsuarios imagem={usuarios.imagem} nome={usuarios.nome} />
            ))}
            <div class="outro">
              <p>
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags •
                Idioma
              </p>
            </div>
            <div class="outro">
              <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
