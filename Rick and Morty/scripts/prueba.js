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
ulAsideBodyRoot.className="ulAsideBodyRoot"
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

const dateAndEpisode = document.createElement("p");
dateAndEpisode.id = "subTitle";
bodyBodyRoot.appendChild(dateAndEpisode);
dateAndEpisode.innerText = "Date | Episode";

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

/* const backGroundRandom={
  backGround1:{
    color:"rgb(2,0,36)",
    effect:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"

  },
  backGround2:{
    color:"rgb(34,193,195)",
    effect:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"

  },
  backGround3:{
    color:"rgb(63,94,251)",
    effect:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"

  },
  backGround4:{
    color:"rgb(131,58,180)",
    effect:"background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);"

  },


} */

let rickAndMorty={
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}

const setEpisodes=(episodes)=>{
  console.log(episodes);
   
  /* Render and create all a */
  episodes.forEach((element) => {
    const liUlAsideBodyRoot=document.createElement("li")
liUlAsideBodyRoot.className="liUlAsideBodyRoot"

const aLiUlAsideBodyRoot=document.createElement("a")
aLiUlAsideBodyRoot.className="aLiUlAsideBodyRoot"


    ulAsideBodyRoot.appendChild(liUlAsideBodyRoot) 
  liUlAsideBodyRoot.appendChild(aLiUlAsideBodyRoot)
  aLiUlAsideBodyRoot.innerText="Episodio "+element.id
    
  });
/* ------------------------------------------------- */
  /*  */
  let aLiUls=document.querySelectorAll(".aLiUlAsideBodyRoot")
  
  aLiUls.forEach((aLiUl)=>{
    
    aLiUl.addEventListener("click",(e)=>{
      e.preventDefault()
      
      h2.innerText=e.target.innerText
      let number=parseInt(e.target.innerText.toString().slice(8))
      console.log(number);
      numberEpisode=number-1
      
      dateAndEpisode.innerText=episodes[numberEpisode].air_date+" | "+episodes[numberEpisode].episode
      
       
      let characterById=[]
       characterById=episodes[numberEpisode].characters.map((character)=>{
         
        console.log(characterById);
         characterById=character.slice(42)
         return characterById
       })
       console.log(characterById.toString());

       

      
        fetch(rickAndMorty.characters+"/"+characterById.toString()+"")
        .then((res) => res.json())
        .then((characters=>{
          characters.forEach((character)=>{
            console.log(character.name);
            
            setTimeout(() => {
              let a =document.querySelectorAll(".characterCard")
              console.log(a);
              a.forEach((b)=>{
                b.remove()
              })
              
               
        
              
            }, 500);

            setTimeout(() => {
              const characterCard = document.createElement("div");
              characterCard.className = "characterCard";
              videoCardContainer.appendChild(characterCard);
              let n = (Math.random() * 0xfffff * 1000000).toString(16);
              console.log(n);
              let num=Math.floor(Math.random() * (10 - 1)) + 1;
              let a=Math.floor(Math.random() * (250 - 0)) + 0;
              let b=Math.floor(Math.random() * (250 - 0)) + 0;
              let c=Math.floor(Math.random() * (250 - 0)) + 0;
              let aa=Math.floor(Math.random() * (250 - 0)) + 0;
              let bb=Math.floor(Math.random() * (250 - 0)) + 0;
              let cc=Math.floor(Math.random() * (250 - 0)) + 0;
              let aaa=Math.floor(Math.random() * (250 - 0)) + 0;
              let bbb=Math.floor(Math.random() * (250 - 0)) + 0;
              let ccc=Math.floor(Math.random() * (250 - 0)) + 0;
              characterCard.style.animation="myAnim"+num+" 1s ease 0s 1 normal forwards"
              bodyBodyRoot.style.background="rgb("+a+","+b+","+c+")"
              bodyBodyRoot.style.background="radial-gradient(circle, rgba("+aa+","+bb+","+cc+",1) 0%, rgba("+bbb+","+aaa+","+ccc+",1) 100%)"
      
          
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
              
          
            }, 1000);

            
           

    



          })
         

        }))
        .catch((e)=>console.log(e))
      



       
        
    
       /*  const nameCharacterCard = document.createElement("h3");
        nameCharacterCard.className = "nameCharacterCard";
        characterCard.appendChild(nameCharacterCard);
        nameCharacterCard.innerText = "NameCharacter";
        nameCharacterCard.innerText
    
        const featuresCharacterCard = document.createElement("p");
        featuresCharacterCard.className = "featuresCharacterCard";
        characterCard.appendChild(featuresCharacterCard); */





      
      
      /* fetch(rickAndMorty.characters+"/"+getAllElements(nElements=821)+"")
    .then((res) => res.json())
    .then(user=>console.log(user))
    .catch((e)=>console.log(e));
       */
     
 
      

    })
  })
  /* ------------------------------------------------- */

  
}
/* get all episodes number ----------------------------------------------------------*/
const getAllElements=(nElements)=>{
  count=0
  let allElements=[]
  
  while (count<=nElements) {
    
    allElements.push(count)
    count+=1
  }
  return allElements.toLocaleString()
}



const searchEpisode = () => {
  fetch(rickAndMorty.episodes+"/"+getAllElements(nElements=31)+"")
    .then((res) => res.json())
    .then(setEpisodes)
    .catch((e)=>console.log(e));
};


/* const setCharacters=(characters)=>{
  console.log(characters);

}
 */

/* const getAllCharacters=(nCharacters)=>{
  count1=0
  let allCharacters=[]
  
  while (count1<=nCharacters) {
    
    allCharacters.push(count1)
    count1+=1
  }
  return allCharacters.toLocaleString()
}
 */


/* const searchCaharacters = () => {
  fetch(rickAndMorty.characters+"/"+getAllCharacters(nCharacters=821)+"")
    .then((res) => res.json())
    .then(setCharacters)
    .catch((e)=>console.log(e));
}; */

const ready = () => {
  searchEpisode()
 
  
};
document.addEventListener("DOMContentLoaded", ready);

  
