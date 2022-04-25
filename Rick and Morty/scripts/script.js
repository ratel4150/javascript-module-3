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

const bodyBodyRoot = document.createElement("div");
bodyBodyRoot.id = "body__body";
bodyRoot.appendChild(bodyBodyRoot);

const logo=document.createElement("div")
logo.id="logo"
bodyRoot.appendChild(logo)

const imgLogo=document.createElement("img")
imgLogo.id="imgLogo"
logo.appendChild(imgLogo)
imgLogo.src="/images/image4.png"

const h2 = document.createElement("h2");
h2.id = "title";
bodyBodyRoot.appendChild(h2);
h2.innerText = "EPISODES";

const subTitle = document.createElement("p");
subTitle.id = "subTitle";
bodyBodyRoot.appendChild(subTitle);
subTitle.innerText = "Date | Episode";

const videoCardContainer = document.createElement("div");
videoCardContainer.id = "videoCardContainer";
bodyBodyRoot.appendChild(videoCardContainer);

const containerEpisode=document.createElement("div")
    containerEpisode.className="containerEpisode"
    

const containerButtonExit=document.createElement("div")
containerButtonExit.className="containerButtonExit"

const buttonExit=document.createElement("button")
buttonExit.className="buttonExit"

const windowEpisode=document.createElement("div")
windowEpisode.className="windowEpisode"

const subWindowEpisode=document.createElement("div")
subWindowEpisode.className="subWindowEpisode"

const subWindowEpisode1=document.createElement("div")
subWindowEpisode1.className="subWindowEpisode"

const imgSubWindowEpisode=document.createElement("img")
imgSubWindowEpisode.className="imgSubWindowEpisode"



  





const searchEpisode = () => {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((res) => res.json())
    .then(getEpisodes)
    .catch((e)=>console.log(e));
};

function getEpisodes(episodes) {
  
  console.log(episodes);

  for (const results in episodes.results) {
    const liUlAsideBodyRoot = document.createElement("li");
    ulAsideBodyRoot.appendChild(liUlAsideBodyRoot);
    liUlAsideBodyRoot.id = "li";
    /* liUlAsideBodyRoot.innerText = "episode " + results; */
    liUlAsideBodyRoot.innerHTML="<i class=' fa fa-solid fa-video fa-xl'> episode "+ results+"</i>"
  
  }
  
 
  function getCharacter(character) {
    /* console.log(character) */
    
    

    
    
      
      const characterCard = document.createElement("div");
    characterCard.className = "characterCard";
    videoCardContainer.appendChild(characterCard);
    

    const imageCharacterCard = document.createElement("img");
    imageCharacterCard.className = "imageCharacterCard";
    characterCard.appendChild(imageCharacterCard);
    imageCharacterCard.src=character.image

    const nameCharacterCard = document.createElement("h3");
    nameCharacterCard.className = "nameCharacterCard";
    characterCard.appendChild(nameCharacterCard);
    nameCharacterCard.innerText = "NameCharacter";
    nameCharacterCard.innerText=character.name

    const featuresCharacterCard = document.createElement("p");
    featuresCharacterCard.className = "featuresCharacterCard";
    characterCard.appendChild(featuresCharacterCard);

    

   /*  if (character.species==="Human") {
      featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-user fa-xl'></i> "+ character.species+" | "+character.status;
      
    } else {
      
    } */
    switch (character.species) {
      case "Human":
        featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-user fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="pink"
        break;
      case "Animal":
        featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-frog fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="yellow"
      break;
      case "Disease":
        featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-ghost fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="black"
      break;
      case "Alien":
        featuresCharacterCard.innerHTML = "<i class='fa fa-brands fa-reddit-alien fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="#4dff00"
      break;
      case "Humanoid":
        featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-robot fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="blue"
      break;
      case "Cronenberg":
        featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-clock fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="#ED5C81"
      break;
     
      case "Mythological Creature":
        featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-dove fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="#60F7CD"
      break;
      case "Poopybutthole":
        featuresCharacterCard.innerHTML = "<i class='fa fa-brands fa-atlassian fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="60F4F7"
      break;
      case "Artificial Intelligence":
        featuresCharacterCard.innerHTML = "<i class='fa fa-solid fa-brain fa-xl'></i> "+ character.species+" | "+character.status;
        featuresCharacterCard.style.color="#5CEDC7"
      break;
      
      
      default:
        
        break;
    }
    

    const genderCharacterCard=document.createElement("p")
    characterCard.appendChild(genderCharacterCard)
    if (character.gender==="Male") {
      genderCharacterCard.style.textAlign="center"
      genderCharacterCard.innerHTML="Male <i class='fa fa-solid fa-mars fa-lg'></i>"
      genderCharacterCard.style.color="blue"
      
    } else {
     
      genderCharacterCard.innerHTML="Female <i class='fa fa-solid fa-venus fa-lg'></i>"
      genderCharacterCard.style.color="pink"
      genderCharacterCard.style.textAlign="center"
      
    }
    const containerButtonEpisode=document.createElement("div")
    containerButtonEpisode.className="containerButtonEpisode"
    characterCard.appendChild(containerButtonEpisode)

    const buttonEpisode=document.createElement("button")
    buttonEpisode.className="buttonEpisode"
    containerButtonEpisode.appendChild(buttonEpisode)
    

    const linkEpisode=document.createElement("a")
    linkEpisode.className="linkEpisode"
    buttonEpisode.appendChild(linkEpisode)
    linkEpisode.innerHTML="<i class='fa fa-solid fa-video fa-xl'></i>"
    

    const buttonEpisode2=document.createElement("button")
    buttonEpisode2.className="buttonEpisode"
    containerButtonEpisode.appendChild(buttonEpisode2)
    

    const linkEpisode2=document.createElement("a")
    linkEpisode2.className="linkEpisode2"
    buttonEpisode2.appendChild(linkEpisode2)
    
    linkEpisode2.innerHTML="<i class='fa fa-solid fa-street-view fa-xl'></i>"
    

   /*  const containerEpisode=document.createElement("div")
    containerEpisode.className="containerEpisode"
    bodyBodyRoot.appendChild(containerEpisode)
    containerEpisode.innerText="ffff" */

    /* let characterCardRemove=document.querySelector(".characterCard")
    characterCardRemove.remove()
     let imageCharacterCardRemove=document.querySelector(".imageCharacterCard")
    imageCharacterCardRemove.remove()
     let nameCharacterCardRomeve=document.querySelector(".nameCharacterCard")
    nameCharacterCardRomeve.remove()
     let featuresCharacterCardRemove=document.querySelector(".featuresCharacterCard")
    featuresCharacterCardRemove.remove() */
    /* let linkEpisodes=document.getElementById("videoCardContainer").querySelector(".characterCard").querySelector(".containerButtonEpisode").querySelector(".buttonEpisode")
    console.log(linkEpisodes);
    linkEpisodes.forEach((linkEpisode)=>{
      linkEpisode.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(e.target);
      })
    }) */


    


    let cardsCharacter=document.querySelectorAll(".linkEpisode")
    /* console.log(cardsCharacter); */
    cardsCharacter.forEach((cardCharacter,index)=>{
      cardCharacter.addEventListener("click",(e)=>{
        e.preventDefault();
        /* console.log(e); */
        containerEpisode.style.display="block"
    bodyBodyRoot.appendChild(containerEpisode)
    containerEpisode.appendChild(containerButtonExit)
    containerButtonExit.appendChild(buttonExit)
    buttonExit.innerText="X"
    /* Exit Button */
    
    let a=[]
    a.push(character.image)
    
    a.filter((element)=>{element==="https://rickandmortyapi.com/api/character/avatar/"+index+".jpeg"})
    console.log(a);
    imgSubWindowEpisode.src=a
      console.log(character.image);
      
      
      
      
      
   
   /*  imgSubWindowEpisode.src="https://rickandmortyapi.com/api/character/avatar/"+index+".jpeg"
    let a=""+character.image+""
    console.log(a); */
    buttonExit.addEventListener("click",(e)=>{
      e.preventDefault();
      containerEpisode.style.display="none"
      
      
      
      
    })
    containerEpisode.appendChild(windowEpisode)
    /* subWin0 */
    windowEpisode.appendChild(subWindowEpisode)
    subWindowEpisode.appendChild(imgSubWindowEpisode)
    
    /*  */
   
    



    windowEpisode.appendChild(subWindowEpisode1)
    
        
      }) 
      
     /*  if (cardCharacter.style.display==="block") {
        cardCharacter.style.display==="none"
      } else {
        cardCharacter.style.display==="block"
        
      } */
     /*  if (cardCharacter.style.display==="block") {
        cardCharacter.style.display="none"
        
      } else {
        cardCharacter.style.display="block"
        
      } */
    })
   
            
   
  }
  

  const lis = document
    .getElementById("body__aside")
    .querySelector("ul")
    .querySelectorAll("li");
  lis.forEach((element) => {
    element.addEventListener("click", (e) => {
      
      e.preventDefault();
   
      h2.innerText = e.target.innerText.toUpperCase();
      let number = parseInt(h2.innerText.slice(7));
 
      subTitle.innerText =
        episodes.results[number].air_date +
        " | " +
        episodes.results[number].episode;
        for (const character in episodes.results[number].characters) {
          /* console.log(episodes.results[number].characters[character]); */
          fetch(episodes.results[number].characters[character])
            .then((res) => res.json())
            .then((people)=>getCharacter(people)
            )
            
           
            
            
        }
        
    });
    
    
  });
  
  
}
const ready = () => {
  searchEpisode();
};
document.addEventListener("DOMContentLoaded", ready);
let a=document.getElementById("videoCardContainer").querySelectorAll(".characterCard")
  console.log(a);
  
