import OutrosUsuarios from "./OutrosUsuarios";
import PerfilUsuario from "./PerfilUsuario";

const outrosUsuarios = [
  {
    nome: "Cleber",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Pitangus_sulphuratus_3.jpg",
  },
  {
    nome: "Cleber",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Pitangus_sulphuratus_3.jpg",
  },
  {
    nome: "Cleber",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Pitangus_sulphuratus_3.jpg",
  },
  {
    nome: "Cleber",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Pitangus_sulphuratus_3.jpg",
  },
  {
    nome: "Cleber",
    imagem:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Pitangus_sulphuratus_3.jpg",
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
