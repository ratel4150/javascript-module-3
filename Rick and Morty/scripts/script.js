const body = document.querySelector("body");
const root = document.getElementById("root");
//
const headerRoot = document.createElement("div");
headerRoot.id = "root__header";
root.appendChild(headerRoot);

const bodyRoot = document.createElement("div");
bodyRoot.id = "root__body";
root.appendChild(bodyRoot);

const asideBodyRoot = document.createElement("div");
asideBodyRoot.id = "body__aside";
bodyRoot.appendChild(asideBodyRoot);

const ulAsideBodyRoot = document.createElement("ul");
asideBodyRoot.appendChild(ulAsideBodyRoot);

/* const liUlAsideBodyRoot=document.createElement("li")
ulAsideBodyRoot.appendChild(liUlAsideBodyRoot)
liUlAsideBodyRoot.id="li"
liUlAsideBodyRoot.innerText="episodio1"
liUlAsideBodyRoot.style.color="white" */
/* const lisUlAsideBodyRoot = ["li1", "li2", "li3", "li4"].map(text => {
    let liUlAsideBodyRoot = document.createElement("li"); 
    liUlAsideBodyRoot.innerText="episodio1"
    liUlAsideBodyRoot.id="li"
    liUlAsideBodyRoot.style.color="white" 
    return liUlAsideBodyRoot;
});
ulAsideBodyRoot.append(...lisUlAsideBodyRoot); */

const bodyBodyRoot = document.createElement("div");
bodyBodyRoot.id = "body__body";
bodyRoot.appendChild(bodyBodyRoot);

const h2 = document.createElement("h2");
h2.id = "title";
bodyBodyRoot.appendChild(h2);
h2.innerText = "EPISODES";

const subTitle=document.createElement("p")
subTitle.id="subTitle"
bodyBodyRoot.appendChild(subTitle)
subTitle.innerText="Date | Episode"

const videoCardContainer = document.createElement("div");
videoCardContainer.id = "videoCardContainer";
bodyBodyRoot.appendChild(videoCardContainer);

const videoCard = document.createElement("div");
videoCard.id = "videoCard";
videoCardContainer.appendChild(videoCard);

const videoCard1 = document.createElement("div");
videoCard1.id = "videoCard";
videoCardContainer.appendChild(videoCard1);

const videoCard2 = document.createElement("div");
videoCard2.id = "videoCard";
videoCardContainer.appendChild(videoCard2);

const videoCard3 = document.createElement("div");
videoCard3.id = "videoCard";
videoCardContainer.appendChild(videoCard3);

const videoCard4 = document.createElement("div");
videoCard4.id = "videoCard";
videoCardContainer.appendChild(videoCard4);

const videoCard5 = document.createElement("div");
videoCard5.id = "videoCard";
videoCardContainer.appendChild(videoCard5);

const videoCard6 = document.createElement("div");
videoCard6.id = "videoCard";
videoCardContainer.appendChild(videoCard6);

const videoCard7 = document.createElement("div");
videoCard7.id = "videoCard";
videoCardContainer.appendChild(videoCard7);



//style


const searchEpisode = () => {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((res) => res.json())
    .then(getEpisodes)
    .catch(console.log("error"));
};

function getEpisodes(episodes) {
  /* const liUlAsideBodyRoot=document.createElement("li")
ulAsideBodyRoot.appendChild(liUlAsideBodyRoot)
liUlAsideBodyRoot.id="li"
liUlAsideBodyRoot.innerText=episode.results[0].id
liUlAsideBodyRoot.style.color="white" */
  console.log(episodes);

  for (const results in episodes.results) {
    console.log(results + ":" + episodes[results]);
    const liUlAsideBodyRoot = document.createElement("li");
    ulAsideBodyRoot.appendChild(liUlAsideBodyRoot);
    liUlAsideBodyRoot.id = "li";
    liUlAsideBodyRoot.innerText = "episode " + results;
  }
  
  
  const lis=document.getElementById("body__aside").querySelector("ul").querySelectorAll("li")
  lis.forEach(element => {
      element.addEventListener("click",(e)=>{
          e.preventDefault()
          h2.innerText=e.target.innerText.toUpperCase()
          let number=parseInt(h2.innerText.slice(8)) 
          
          console.log(episodes.results[number].characters[0]);

          fetch(episodes.results[number].characters[0])
          .then((res) => res.json())
          .then(data=>console.log(data))
          .catch(console.log("error"));
          subTitle.innerText=episodes.results[number].air_date+" | "+episodes.results[number].episode

      })
      
  });
}
const ready = () => {
  searchEpisode();
  
  
};
document.addEventListener("DOMContentLoaded", ready);



