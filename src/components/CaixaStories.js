import Stories from "./Stories";

export default function CaixaStories() {
  let stories = [
    {
      username: "Bianca",
      userPhoto: "./images/bianca.jpg",
    },
    {
      username: "DiscoveryC",
      userPhoto: "./images/discovery-canal.jpg",
    },
    {
      username: "FanMadrid",
      userPhoto: "./images/fanclub.jpg",
    },
    {
      username: "Jobecca",
      userPhoto: "./images/joseph-rebecca.jpg",
    },
    {
      username: "Osarugue",
      userPhoto: "./images/osarugue.jpg",
    },
    {
      username: "Piccole",
      userPhoto: "./images/sorveteria.jpg",
    },
    {
      username: "Rebecca",
      userPhoto: "./images/joseph-rebecca.jpg",
    },
    {
      username: "Rebecca",
      userPhoto: "./images/joseph-rebecca.jpg",
    },
  ];
  return (
    <div class="caixa-stories">
      {stories.map((storie) => (
        <Stories username={storie.username} userPhoto={storie.userPhoto} />
      ))}
      <ion-icon class="botao-stories" name="chevron-forward-circle"></ion-icon>
    </div>
  );
}
