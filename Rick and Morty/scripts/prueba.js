const body = document.querySelector("body");
const root = document.getElementById("root");
//
const headerRoot = document.createElement("div");
headerRoot.id = "root__header";
root.appendChild(headerRoot);

const divLogoHeaderRoot = document.createElement("div");
divLogoHeaderRoot.className = "divLogoHeaderRoot";
headerRoot.appendChild(divLogoHeaderRoot);

const divIconsHeaderRoot = document.createElement("div");
divIconsHeaderRoot.className = "divIconsHeaderRoot";
headerRoot.appendChild(divIconsHeaderRoot);

const IconsHeaderRoot = document.createElement("a");
IconsHeaderRoot.className = "IconsHeaderRoot";
divIconsHeaderRoot.appendChild(IconsHeaderRoot);
IconsHeaderRoot.innerHTML = "<i class='fa fa-brands fa-linkedin fa-xl '></i>";

const IconsHeaderRoot1 = document.createElement("a");
IconsHeaderRoot1.className = "IconsHeaderRoot";
divIconsHeaderRoot.appendChild(IconsHeaderRoot1);
IconsHeaderRoot1.innerHTML = "<i class='fa fa-brands fa-github fa-xl'></i>";

const IconsHeaderRoot2 = document.createElement("a");
IconsHeaderRoot2.className = "IconsHeaderRoot";
divIconsHeaderRoot.appendChild(IconsHeaderRoot2);
IconsHeaderRoot2.innerHTML = "<i class='fa fa-brands fa-facebook fa-xl'></i>";

const titleHeaderRoot = document.createElement("h1");
titleHeaderRoot.className = "titleHeaderRoot";
divLogoHeaderRoot.appendChild(titleHeaderRoot);
titleHeaderRoot.innerText = "Rick & Morty API";

const bodyRoot = document.createElement("div");
bodyRoot.id = "root__body";
root.appendChild(bodyRoot);

const footerRoot = document.createElement("div");
footerRoot.id = "root_footer";
root.appendChild(footerRoot);

const nameFooterRoot = document.createElement("p");
nameFooterRoot.className = "nameFooterRoot";
footerRoot.appendChild(nameFooterRoot);
nameFooterRoot.innerText = "designed by ratel";

const asideBodyRoot = document.createElement("div");
asideBodyRoot.id = "body__aside";
bodyRoot.appendChild(asideBodyRoot);

const ulAsideBodyRoot = document.createElement("ul");
ulAsideBodyRoot.className = "ulAsideBodyRoot";
asideBodyRoot.appendChild(ulAsideBodyRoot);

const bodyBodyRoot = document.createElement("div");
bodyBodyRoot.id = "body__body";
bodyRoot.appendChild(bodyBodyRoot);

const logo = document.createElement("div");
logo.id = "logo";
bodyRoot.appendChild(logo);

const imgLogo = document.createElement("img");
imgLogo.id = "imgLogo";
logo.appendChild(imgLogo);
imgLogo.src = "/images/image4.png";

const h2 = document.createElement("h2");
h2.id = "title";
bodyBodyRoot.appendChild(h2);
h2.innerText = "EPISODES";

const dateAndEpisode = document.createElement("p");
dateAndEpisode.id = "subTitle";
bodyBodyRoot.appendChild(dateAndEpisode);
dateAndEpisode.innerText = "Date | Episode";

const videoCardContainer = document.createElement("div");
videoCardContainer.id = "videoCardContainer";
bodyBodyRoot.appendChild(videoCardContainer);

const containerEpisode = document.createElement("div");
containerEpisode.className = "containerEpisode";

const containerEpisode1 = document.createElement("div");
containerEpisode1.className = "containerEpisode1";

const containerButtonExit = document.createElement("div");
containerButtonExit.className = "containerButtonExit";

const buttonExit = document.createElement("button");
buttonExit.className = "buttonExit";

const windowEpisode = document.createElement("div");
windowEpisode.className = "windowEpisode";

const windowEpisode1 = document.createElement("div");
windowEpisode1.className = "windowEpisode1";

const subWindowEpisode3 = document.createElement("div");
subWindowEpisode3.className = "subWindowEpisode";

const subWindowEpisode4 = document.createElement("div");
subWindowEpisode4.className = "subWindowEpisode";

const subWindowEpisode = document.createElement("div");
subWindowEpisode.className = "subWindowEpisode";

const subWindowEpisode1 = document.createElement("div");
subWindowEpisode1.className = "subWindowEpisode";
/* aqui hacer etiquetas para que no se repitan en el forEach */

const characterSubWindowEpisode = document.createElement("div");
characterSubWindowEpisode.className = "characterSubWindowEpisode";

const labelNameCharacter = document.createElement("p");
labelNameCharacter.className = "labelNameCharacter";

const labelTypeCharacter = document.createElement("p");
labelTypeCharacter.className = "labelTypeCharacter";

const labelStatusCharacter = document.createElement("p");
labelStatusCharacter.className = "labelStatusCharacter";

const labelLocationCharacter = document.createElement("p");
labelLocationCharacter.className = "labelLocationCharacter";

const labelGenderCharacter = document.createElement("p");
labelGenderCharacter.className = "labelGenderCharacter";

const imgSubWindowEpisode = document.createElement("img");
imgSubWindowEpisode.className = "imgSubWindowEpisode";

const imgSubWindowEpisode1 = document.createElement("img");
imgSubWindowEpisode1.className = "imgSubWindowEpisode";

const nameSubWindowLocation = document.createElement("p");
nameSubWindowLocation.className = "nameSubWindowLocation";

const locationNameSubWindowLocation = document.createElement("p");
locationNameSubWindowLocation.className = "locationNameSubWindowLocation";

const dimensionNameSubWindowLocation = document.createElement("p");
dimensionNameSubWindowLocation.className = "dimensionNameSubWindowLocation";

let rickAndMorty = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

const setEpisodes = (episodes) => {
  console.log(episodes);

  /* Render and create all a */
  episodes.forEach((element) => {
    const liUlAsideBodyRoot = document.createElement("li");
    liUlAsideBodyRoot.className = "liUlAsideBodyRoot";

    const aLiUlAsideBodyRoot = document.createElement("a");
    aLiUlAsideBodyRoot.className = "aLiUlAsideBodyRoot";

    ulAsideBodyRoot.appendChild(liUlAsideBodyRoot);
    liUlAsideBodyRoot.appendChild(aLiUlAsideBodyRoot);
    /* aLiUlAsideBodyRoot.innerText="Episodio "+element.id */
    aLiUlAsideBodyRoot.innerHTML =
      "<i class=' fa fa-solid fa-video fa-xl'> episode " + element.id + "</i>";
  });
  /* ------------------------------------------------- */
  /*  */
  let aLiUls = document.querySelectorAll(".aLiUlAsideBodyRoot");

  aLiUls.forEach((aLiUl) => {
    aLiUl.addEventListener("click", (e) => {
      e.preventDefault();
      let number = parseInt(e.target.innerText.toString().slice(8));
      console.log(number);
      numberEpisode = number - 1;
      h2.innerText = e.target.innerText + " " + episodes[numberEpisode].name;

      dateAndEpisode.innerText =
        episodes[numberEpisode].air_date +
        " | " +
        episodes[numberEpisode].episode;

      let characterById = [];
      characterById = episodes[numberEpisode].characters.map((character) => {
        console.log(characterById);
        characterById = character.slice(42);
        return characterById;
      });
      console.log(characterById.toString());

      fetch(rickAndMorty.characters + "/" + characterById.toString() + "")
        .then((res) => res.json())
        .then((characters) => {
          characters.forEach((character) => {
            console.log(character.name);
            let prueba = character.id;
            console.log(character.id);
            /* Remove character card */
            setTimeout(() => {
              let a = document.querySelectorAll(".characterCard");

              a.forEach((b) => {
                b.remove();
              });
            }, 500);

            setTimeout(() => {
              const characterCard = document.createElement("div");
              characterCard.className = "characterCard";
              videoCardContainer.appendChild(characterCard);

              let num = Math.floor(Math.random() * (10 - 1)) + 1;
              let a = Math.floor(Math.random() * (250 - 0)) + 0;
              let b = Math.floor(Math.random() * (250 - 0)) + 0;
              let c = Math.floor(Math.random() * (250 - 0)) + 0;
              let aa = Math.floor(Math.random() * (250 - 0)) + 0;
              let bb = Math.floor(Math.random() * (250 - 0)) + 0;
              let cc = Math.floor(Math.random() * (250 - 0)) + 0;
              let aaa = Math.floor(Math.random() * (250 - 0)) + 0;
              let bbb = Math.floor(Math.random() * (250 - 0)) + 0;
              let ccc = Math.floor(Math.random() * (250 - 0)) + 0;
              characterCard.style.animation =
                "myAnim" + num + " 1s ease 0s 1 normal forwards";
              bodyBodyRoot.style.background =
                "rgb(" + a + "," + b + "," + c + ")";
              bodyBodyRoot.style.background =
                "radial-gradient(circle, rgba(" +
                aa +
                "," +
                bb +
                "," +
                cc +
                ",1) 0%, rgba(" +
                bbb +
                "," +
                aaa +
                "," +
                ccc +
                ",1) 100%)";

              const imageCharacterCard = document.createElement("img");
              imageCharacterCard.className = "imageCharacterCard";
              characterCard.appendChild(imageCharacterCard);
              imageCharacterCard.src = character.image;

              const nameCharacterCard = document.createElement("h3");
              nameCharacterCard.className = "nameCharacterCard";
              characterCard.appendChild(nameCharacterCard);
              nameCharacterCard.innerText = "NameCharacter";
              nameCharacterCard.innerText = character.name;

              const featuresCharacterCard = document.createElement("p");
              featuresCharacterCard.className = "featuresCharacterCard";
              characterCard.appendChild(featuresCharacterCard);
              switch (character.species) {
                case "Human":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-solid fa-user fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "pink";
                  break;
                case "Animal":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-solid fa-frog fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "yellow";
                  break;
                case "Disease":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-solid fa-ghost fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "black";
                  break;
                case "Alien":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-brands fa-reddit-alien fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "#4dff00";
                  break;
                case "Humanoid":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-solid fa-robot fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "blue";
                  break;
                case "Cronenberg":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-solid fa-clock fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "#ED5C81";
                  break;

                case "Mythological Creature":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-solid fa-dove fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "#60F7CD";
                  break;
                case "Poopybutthole":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-brands fa-atlassian fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "60F4F7";
                  break;
                case "Artificial Intelligence":
                  featuresCharacterCard.innerHTML =
                    "<i class='fa fa-solid fa-brain fa-xl'></i> " +
                    character.species +
                    " | " +
                    character.status;
                  featuresCharacterCard.style.color = "#5CEDC7";
                  break;

                default:
                  break;
              }
              const genderCharacterCard = document.createElement("p");
              genderCharacterCard.className = "genderCharacterCard";
              characterCard.appendChild(genderCharacterCard);
              if (character.gender === "Male") {
                genderCharacterCard.style.textAlign = "center";
                genderCharacterCard.innerHTML =
                  "Male <i class='fa fa-solid fa-mars fa-lg'></i>";
                genderCharacterCard.style.color = "blue";
              } else {
                genderCharacterCard.innerHTML =
                  "Female <i class='fa fa-solid fa-venus fa-lg'></i>";
                genderCharacterCard.style.color = "pink";
                genderCharacterCard.style.textAlign = "center";
              }

              const containerButtonEpisode = document.createElement("div");
              containerButtonEpisode.className = "containerButtonEpisode";
              characterCard.appendChild(containerButtonEpisode);
              /* Crear button de episodios */

              const buttonEpisode = document.createElement("button");
              buttonEpisode.className = "buttonEpisode";
              containerButtonEpisode.appendChild(buttonEpisode);

              buttonEpisode.addEventListener("click", (e) => {
                e.target = videoCardContainer.appendChild(containerEpisode);
                console.log(e);
                containerEpisode.style.display = "block";
                bodyBodyRoot.appendChild(containerEpisode);
                containerEpisode.appendChild(containerButtonExit);
                containerButtonExit.appendChild(buttonExit);
                buttonExit.innerText = "X";

                containerEpisode.appendChild(windowEpisode);
                windowEpisode.appendChild(subWindowEpisode);
                subWindowEpisode.appendChild(imgSubWindowEpisode);
                windowEpisode.appendChild(subWindowEpisode1);
                subWindowEpisode.appendChild(characterSubWindowEpisode);

                characterSubWindowEpisode.appendChild(labelNameCharacter);
                characterSubWindowEpisode.appendChild(labelTypeCharacter);
                characterSubWindowEpisode.appendChild(labelGenderCharacter);
                characterSubWindowEpisode.appendChild(labelStatusCharacter);
                characterSubWindowEpisode.appendChild(labelLocationCharacter);

                imgSubWindowEpisode.src = character.image;
                labelNameCharacter.innerText = character.name;
                labelTypeCharacter.innerText = character.species;
                switch (character.species) {
                  case "Human":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-solid fa-user fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "pink";
                    break;
                  case "Animal":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-solid fa-frog fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "yellow";
                    break;
                  case "Disease":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-solid fa-ghost fa-xl'></i> " +
                      character.species;
                    featuresCharacterCard.style.color = "black";
                    break;
                  case "Alien":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-brands fa-reddit-alien fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "#4dff00";
                    break;
                  case "Humanoid":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-solid fa-robot fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "blue";
                    break;
                  case "Cronenberg":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-solid fa-clock fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "#ED5C81";
                    break;

                  case "Mythological Creature":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-solid fa-dove fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "#60F7CD";
                    break;
                  case "Poopybutthole":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-brands fa-atlassian fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "60F4F7";
                    break;
                  case "Artificial Intelligence":
                    labelTypeCharacter.innerHTML =
                      "<i class='fa fa-solid fa-brain fa-xl'></i> " +
                      character.species;
                    labelTypeCharacter.style.color = "#5CEDC7";
                    break;

                  default:
                    break;
                }
                if (character.gender === "Male") {
                  labelGenderCharacter.innerHTML =
                    "Male <i class='fa fa-solid fa-mars fa-lg'></i>";
                  labelGenderCharacter.style.color = "blue";
                } else {
                  labelGenderCharacter.innerHTML =
                    "Female <i class='fa fa-solid fa-venus fa-lg'></i>";
                  labelGenderCharacter.style.color = "pink";
                }

                switch (character.status) {
                  case "Alive":
                    labelStatusCharacter.innerHTML =
                      "<i class='fa fa-solid fa-dna fa-xl'></i> " +
                      character.status;
                    labelStatusCharacter.style.color = "white";

                    break;
                  case "Dead":
                    labelStatusCharacter.innerHTML =
                      "<i class='fa fa-solid fa-skull fa-xl'></i> " +
                      character.status;
                    labelStatusCharacter.style.color = "black";

                    break;
                }

                labelLocationCharacter.innerHTML =
                  "<i class='fa fa-solid fa-globe fa-xl'></i> " +
                  character.location.name;
                labelLocationCharacter.style.color = "aqua";
                console.log(character);

                character.episode.forEach((episode) => {
                  /* Obtener episodio */
                  fetch(rickAndMorty.episodes + "/" + episode.slice(40))
                    .then((res) => res.json())
                    .then((setEpisode) => {
                      setTimeout(() => {
                        let a = document.querySelectorAll(
                          ".divSubWindowEpisode"
                        );

                        a.forEach((b) => {
                          b.remove();
                        });
                      }, 100);

                      setTimeout(() => {
                        const divSubWindowEpisode =
                          document.createElement("div");
                        divSubWindowEpisode.className = "divSubWindowEpisode";

                        const titleDivSubWindowEpisode =
                          document.createElement("p");
                        titleDivSubWindowEpisode.className =
                          "titleDivSubWindowEpisode";

                        const titleEpisodeDivSubWindowEpisode =
                          document.createElement("p");
                        titleEpisodeDivSubWindowEpisode.className =
                          "titleEpisodeDivSubWindowEpisode";

                        const titleDateCreateDivSubWindowEpisode =
                          document.createElement("p");
                        titleDateCreateDivSubWindowEpisode.className =
                          "titleDateCreateDivSubWindowEpisode";

                        subWindowEpisode1.appendChild(divSubWindowEpisode);

                        divSubWindowEpisode.appendChild(
                          titleDivSubWindowEpisode
                        );
                        divSubWindowEpisode.appendChild(
                          titleEpisodeDivSubWindowEpisode
                        );
                        divSubWindowEpisode.appendChild(
                          titleDateCreateDivSubWindowEpisode
                        );

                        titleDivSubWindowEpisode.style.display = "block";
                        titleEpisodeDivSubWindowEpisode.style.display = "block";
                        titleDateCreateDivSubWindowEpisode.style.display =
                          "block";

                        titleDivSubWindowEpisode.innerText = setEpisode.name;
                        titleEpisodeDivSubWindowEpisode.innerHTML =
                          "<i class='fa fa-solid fa-video '> " +
                          setEpisode.episode +
                          "</i>";
                        titleDateCreateDivSubWindowEpisode.innerHTML =
                          "<i class='fa fa-solid fa-calendar-day'> " +
                          setEpisode.created +
                          "</i>";
                      }, 200);
                    })
                    .catch((e) => console.log(e)); /*  */
                });

                buttonExit.addEventListener("click", (e) => {
                  e.preventDefault();
                  console.log(e);

                  e.target = containerEpisode.style.display = "none";
                });
              });

              const linkEpisode = document.createElement("a");
              linkEpisode.className = "linkEpisode";
              buttonEpisode.appendChild(linkEpisode);
              linkEpisode.innerHTML =
                "<i class='fa fa-solid fa-video fa-xl'></i>";

              /* Crear button de locations */

              const buttonEpisode2 = document.createElement("button");
              buttonEpisode2.className = "buttonEpisode1";
              containerButtonEpisode.appendChild(buttonEpisode2);

              buttonEpisode2.addEventListener("click", (e) => {
                e.target = videoCardContainer.appendChild(containerEpisode1);
                containerEpisode1.style.display = "block";
                bodyBodyRoot.appendChild(containerEpisode1);

                containerEpisode1.appendChild(containerButtonExit);
                containerButtonExit.appendChild(buttonExit);
                buttonExit.innerText = "X";

                buttonExit.addEventListener("click", (e) => {
                  e.preventDefault();
                  e.target = containerEpisode1.style.display = "none";
                });
                containerEpisode1.appendChild(windowEpisode1);
                windowEpisode1.appendChild(subWindowEpisode3);
                windowEpisode1.appendChild(subWindowEpisode4);
                subWindowEpisode3.appendChild(imgSubWindowEpisode1);
                imgSubWindowEpisode1.src = character.image;
                subWindowEpisode3.appendChild(nameSubWindowLocation);
                nameSubWindowLocation.innerText = character.name;
                subWindowEpisode3.appendChild(locationNameSubWindowLocation);
                locationNameSubWindowLocation.innerText =
                  character.location.name;
                console.log(character.location.url.slice(41));

                fetch(
                  rickAndMorty.locations +
                    "/" +
                    character.location.url.slice(41)
                )
                  .then((res) => res.json())
                  .then((location) => {
                    console.log(location.residents);
                    subWindowEpisode3.appendChild(
                      dimensionNameSubWindowLocation
                    );
                    dimensionNameSubWindowLocation.innerText =
                      location.dimension;

                    let prueba = location.residents.map((resident, index) => {
                      return resident.slice(42).toString();
                    });
                    let a = prueba.toString();
                    console.log(prueba.toString());
                    console.log(rickAndMorty.characters + "/" + a);

                    fetch(rickAndMorty.characters + "/" + a)
                      .then((es) => es.json())
                      .then((peoples) => {
                        console.log(peoples);
                        peoples.forEach((people) => {

                          setTimeout(() => {
                            let a = document.querySelectorAll(
                              ".containerSubWindowLocation"
                            );
    
                            a.forEach((b) => {
                              b.remove();
                            });
                            
                          }, 50);

                          setTimeout(() => {
                            const containerSubWindowLocation =
                            document.createElement("div");
                          containerSubWindowLocation.className =
                            "containerSubWindowLocation";
                          subWindowEpisode4.appendChild(
                            containerSubWindowLocation
                          );
                          const imgContainerSubWindowLocation =
                            document.createElement("img");
                          imgContainerSubWindowLocation.className =
                            "imgContainerSubWindowLocation";
                          containerSubWindowLocation.appendChild(
                            imgContainerSubWindowLocation
                          );
                          const nameContainerSubWindowLocation =
                            document.createElement("p");
                          nameContainerSubWindowLocation.className =
                            "nameContainerSubWindowLocation";
                          containerSubWindowLocation.appendChild(
                            nameContainerSubWindowLocation
                          );

                           imgContainerSubWindowLocation.src=people.image
                          nameContainerSubWindowLocation.innerText =
                            people.name;
                            
                          }, 200);
                         
                        });
                      })
                      .catch((e) => console.log(e));
                  })
                  .catch((e) => console.log(e));
              });

              const linkEpisode2 = document.createElement("a");
              linkEpisode2.className = "linkEpisode2";
              buttonEpisode2.appendChild(linkEpisode2);

              linkEpisode2.innerHTML =
                "<i class='fa fa-solid fa-street-view fa-xl'></i>";
            }, 1000);
          });
        })
        .catch((e) => console.log(e));
    });
  });
  /* ------------------------------------------------- */
};
/* get all episodes number ----------------------------------------------------------*/
const getAllElements = (nElements) => {
  count = 0;
  let allElements = [];

  while (count <= nElements) {
    allElements.push(count);
    count += 1;
  }
  return allElements.toLocaleString();
};

const searchEpisode = () => {
  fetch(rickAndMorty.episodes + "/" + getAllElements((nElements = 51)) + "")
    .then((res) => res.json())
    .then(setEpisodes)
    .catch((e) => console.log(e));
};

const ready = () => {
  searchEpisode();
};
document.addEventListener("DOMContentLoaded", ready);
