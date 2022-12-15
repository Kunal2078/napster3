import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let collection= await fetchCollecton();
  let Newcategory=['New']
  let   Actioncategory=['Action']
  let newlist=collection.filter(element=> Newcategory.includes(element.category))
  let Actionlist=collection.filter(element=> Actioncategory.includes(element.category))
  console.log(newlist)
  //Updates the DOM with the cities
  newlist.forEach((key) => {
    addNewMovies(key.id, key.Imageurl, key.name, key.trailerUrl, key.bio, key.movieUrl);
  });
  Actionlist.forEach((key) => {
    addActionMovies(key.id, key.Imageurl, key.name, key.trailerUrl, key.bio, key.movieUrl);
  });

}

//Implementation of fetch call
async function fetchCollecton() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
 try{

   let fetchdcollection = await fetch("http://192.168.1.7:8082/collection");
   let array= fetchdcollection.json();
 
   return array;
 }
 catch(err){
  return null;
 }
}

//Implementation of DOM manipulation to add cities
function addNewMovies(id, Imageurl, name, trailerUrl,bio,movieUrl) {
  // TODO: MODULE_CITIES

  // 1. Populate the City details and insert those details into the DOM
  const slider=document.getElementById("slider")
  slider.setAttribute('style','z-index:10')

  const parentdiv=document.createElement('div')
  parentdiv.setAttribute("class", 'card');
  parentdiv.setAttribute("id", 'card');
  parentdiv.setAttribute("style", 'width:18rem');

  const imagcontainer=document.createElement('div')
  imagcontainer.setAttribute('class','image-container')
   parentdiv.append(imagcontainer)
//   const atag=document.createElement("a")
//   atag.setAttribute("href",`pages/adventures/?city=${id} `)

//  const divtile=document.createElement('div')
//   divtile.setAttribute("class","tile")

  const img=document.createElement('img')
  img.setAttribute("class",'card-img-top')
  img.setAttribute("src",Imageurl)
  img.setAttribute("id",id)
   
  imagcontainer.append(img)

  const cardDetails=document.createElement("div")
  cardDetails.setAttribute("class","card-details")

  const h5=document.createElement("h5")
  h5.setAttribute('class','card-title')
  h5.textContent=name
//   const h5textNode=document.createTextNode(name)
//   h5.appendChild(h5textNode)

//   const h2=document.createElement("h2")
//   const h2textNode=document.createTextNode(bio)
//   h2.appendChild(h2textNode)

const form=document.createElement('form')
form.setAttribute('class','form')

const div=document.createElement('div')
div.setAttribute('style','display:flex;gap:13px')

const playbtn=document.createElement('button')
playbtn.setAttribute('type','button')
playbtn.setAttribute('class','play-button')

let iPlay=document.createElement('i')
iPlay.setAttribute('class','fa-solid fa-play')
playbtn.append(iPlay)

let playSpan=document.createElement('span')
playSpan.setAttribute('class','btn-text')
playSpan.textContent='Play'
playbtn.append(playSpan)
div.appendChild(playbtn)

const likebtn=document.createElement('button')
likebtn.setAttribute('type','button')
likebtn.setAttribute('class','like-button')

let ilike=document.createElement('i')
ilike.setAttribute('class','fa-solid fa-thumbs-up')
likebtn.append(ilike)

div.appendChild(likebtn)
form.append(div)
let moreinfobtn=document.createElement('button')
moreinfobtn.setAttribute('class','more-info')

let ichevrondown=document.createElement('i')
ichevrondown.setAttribute('class','fa-sharp fa-solid fa-chevron-down')
moreinfobtn.append(ichevrondown)
form.appendChild(moreinfobtn)
// parentdiv.appendChild(atag);
// atag.appendChild(divtile);
// divtile.appendChild(img);
imagcontainer.appendChild(cardDetails);
cardDetails.appendChild(h5)
cardDetails.appendChild(form)
// cardDetails.appendChild(h2) hre

slider.appendChild(parentdiv);




}

//Implementation of DOM manipulation to add cities
function addActionMovies(id, Imageurl, name, trailerUrl,bio,movieUrl) {
  // TODO: MODULE_CITIES

  // 1. Populate the City details and insert those details into the DOM
  const slider=document.getElementById("Actionslider")
  slider.setAttribute('style','z-index:9')
  const parentdiv=document.createElement('div')
  parentdiv.setAttribute("class", 'card');
  parentdiv.setAttribute("id", 'card');
  parentdiv.setAttribute("style", 'width:18rem');

  const imagcontainer=document.createElement('div')
  imagcontainer.setAttribute('class','image-container')
   parentdiv.append(imagcontainer)
//   const atag=document.createElement("a")
//   atag.setAttribute("href",`pages/adventures/?city=${id} `)

//  const divtile=document.createElement('div')
//   divtile.setAttribute("class","tile")

  const img=document.createElement('img')
  img.setAttribute("class",'card-img-top')
  img.setAttribute("src",Imageurl)
  img.setAttribute("id",id)
   
  imagcontainer.append(img)

  const cardDetails=document.createElement("div")
  cardDetails.setAttribute("class","card-details")

  const h5=document.createElement("h5")
  h5.setAttribute('class','card-title')
  h5.textContent=name
//   const h5textNode=document.createTextNode(name)
//   h5.appendChild(h5textNode)

//   const h2=document.createElement("h2")
//   const h2textNode=document.createTextNode(bio)
//   h2.appendChild(h2textNode)

const form=document.createElement('form')
form.setAttribute('class','form')

const div=document.createElement('div')
div.setAttribute('style','display:flex;gap:13px')

const playbtn=document.createElement('button')
playbtn.setAttribute('type','button')
playbtn.setAttribute('class','play-button')

let iPlay=document.createElement('i')
iPlay.setAttribute('class','fa-solid fa-play')
playbtn.append(iPlay)

let playSpan=document.createElement('span')
playSpan.setAttribute('class','btn-text')
playSpan.textContent='Play'
playbtn.append(playSpan)
div.appendChild(playbtn)

const likebtn=document.createElement('button')
likebtn.setAttribute('type','button')
likebtn.setAttribute('class','like-button')

let ilike=document.createElement('i')
ilike.setAttribute('class','fa-solid fa-thumbs-up')
likebtn.append(ilike)

div.appendChild(likebtn)
form.append(div)
let moreinfobtn=document.createElement('button')
moreinfobtn.setAttribute('class','more-info')

let ichevrondown=document.createElement('i')
ichevrondown.setAttribute('class','fa-sharp fa-solid fa-chevron-down')
moreinfobtn.append(ichevrondown)
form.appendChild(moreinfobtn)
// parentdiv.appendChild(atag);
// atag.appendChild(divtile);
// divtile.appendChild(img);
imagcontainer.appendChild(cardDetails);
cardDetails.appendChild(h5)
cardDetails.appendChild(form)
// cardDetails.appendChild(h2) hre

slider.appendChild(parentdiv);




}

export { init, fetchCollecton,addNewMovies,addActionMovies};
