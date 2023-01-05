// import config from "../../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let collection= await fetchCollection();
  let Newcategory=['New']
  let Actioncategory=['Action']
  let Comedycategory=['Comedy']
  let sciFicategory=['Sci-fi']
  let horrorcategory=['Horror']
  let popularcategory=['Popular']

  let newlist=collection.filter(element=> Newcategory.includes(element.category))
  let Actionlist=collection.filter(element=> Actioncategory.includes(element.category))
  let Comedylist=collection.filter(element=> Comedycategory.includes(element.category))
  let SciFilist=collection.filter(element=> sciFicategory.includes(element.category))
  let Horrorlist=collection.filter(element=> horrorcategory.includes(element.category))
  let Popularlist=collection.filter(element=> popularcategory.includes(element.category))

  //Updates the DOM with the cities
  newlist.forEach((key) => {
    addNewMovies(key,key.id);
  });
  Actionlist.forEach((key) => {
    addActionMovies(key);
  });
  Comedylist.forEach((key) => {
    addComedyMovies(key);
  });
  SciFilist.forEach((key) => {
    addSciFiMovies(key);
  });
 Horrorlist.forEach((key) => {
    addHorrorMovies(key);
  });
  Popularlist.forEach((key) => {
    addPopularMovies(key);
  });


}

//Implementation of fetch call
async function fetchCollection() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
 try{

   let fetchdcollection = await fetch("http://127.0.0.1:8082/collection");
   let array= fetchdcollection.json();
 
   return array;
 }
 catch(err){
  return null;
 }
}

async function createCardsDom(item,id){
 
  const card = document.createElement("div");
  card.setAttribute("class", "cards timeout");


  card.setAttribute("style", "width:18rem");

    
  card.innerHTML = `
  <div class="card " id="card" style="width:18rem">
<div class="image-container">

<img class="card-img-top" src="${item.Imageurl}" id="${item.name}"  >
<div class="card-details">
  <h5 class="card-title">${item.name}
  </h5>
  <form class="form">
    <div style="display:flex;gap:13px">
     <a href='../watch/?id=${item.id}'>
     <button type="button" class="play-button"><i class="fa-solid fa-play"></i> <span class="btn-text">
     Play </span></button>
     </a>
      <button type="button" class="like-button"> <i class="fa-solid fa-thumbs-up"> </i></button>
      </div>
        <button class="more-info" type="button" data-name=${item.id} ><i
            class="fa-sharp fa-solid fa-chevron-down"></i> </button>
  </form>
</div>
</div>
</div>
<div class="info-container" id="${item.id}" data-target="${item.id}">
<div class="filter-body"></div>
<div class="info-details">
  <button class="close" onclick="aclose(${item.id})"> <i class="fa-solid fa-xmark"> </i></button>
  <div class="info-trailer-container">
    <iframe class="youtube-trailer" src='${item.trailerUrl}' frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen="true">
    </iframe>
  </div>
  <div class="movie-details">
    <div>
      <div class="category-container d-flex flex-column">
        <div class="category-items"> ${item.category} </div>
      </div>
      <p class="movie-title">
        ${item.name} </p>
      <p class="movie-description">
        ${item.bio}
      </p>
      <form style="gap:20px ;display:flex">
        <a href='../watch/?id=${item.id}'>
          <button type="button" class="info-play-button"> Play <i class="fa-solid fa-play"> </i></button>
        </a>
        <button class="like-button"> <i class="fa-solid fa-thumbs-up"> </i></button>
        <span class="d-flex align-items-center"><i class="fa-solid fa-star"></i> <p class="m-0 ps-2">${item.rating}/10</p></span>
      </form>
    </div>
    <div class="cast-container d-flex flex-row">
      <div class="bg-light  m-lg-5  mt-5 ms-0" style="width:1px;margin-right:20px !important"></div>
      <div class="d-flex flex-column " style="padding: 30px 36px 30px 0;justify-content:space-evenly;">
        <span style="color:grey">Cast: <span style="color:#fff">${item.cast}</span></span>
        <span style="color:grey">Genre: <span style="color:#fff">${item.category}</span></span>
        <span style="color:grey">This movie is: <span style="color:#fff">${item.movieAbout}</span></span>

      </div>
    </div>
  </div>

  <div class="About-movie-container ms-5">
    <h1>About ${item.name}</h1>
    <div class="d-flex flex-column justify-content-around" style="padding: 20px 36px 30px 0;">
      <span class="p-1" style="color:grey">Director: <span style="color:#fff">${item.director}</span></span>
      <span class="p-1" style="color:grey">Cast: <span style="color:#fff">${item.cast}</span></span>
      <span class="p-1" style="color:grey">Writer: <span style="color:#fff">${item.writer}</span></span>
      <span class="p-1" style="color:grey">Genres: <span style="color:#fff">${item.category}</span></span>
      <span class="p-1" style="color:grey">This movie is: <span style="color:#fff">${item.movieAbout}</span></span>

    </div>
  </div>
</div>
</div>
`;
//suggestions loop//


async function addSuggestionstoDOM(){
  try {
    let collection= await fetchCollection();
  
    let Newcategory = ["New","Action","Popular"];
    let suggetionsList =  collection.filter((element) =>
      Newcategory.includes(element.category)
      )
    
      for(let i=0;i<5;i++){
   
        suggestions(suggetionsList[i]);
      }
  
  } catch (error) {
    console.log(error)
  } 
  async function suggestions(key){
    const data = document.getElementById(`suggestions${item.id}`);

 

    const col1 = document.createElement("div");
    col1.setAttribute("class", "col-lg-3 p-3 col-md-6 col-sm-8 ");
    col1.setAttribute("style", "width:20rem");
    data.append(col1);
 
 
   col1.innerHTML=`
   <div class="card " id="card" style="width:18rem">
 
 <div class="image-container">
 
     <img class="card-img-top" src="${key.Imageurl}" id="${key.name}"  >
     <div class="card-details">
       <h5 class="card-title">${key.name}
       </h5>
 
     </div>
     </div>
     </div>
 
         `
  }
  

}

return card}


 

//Implementation of DOM manipulation to add movies
async function addNewMovies(key,id) {

  const data=document.getElementById('slider')

const card= await createCardsDom(key,id)
    data.append(card);

}

//Implementation of DOM manipulation to add cities  
async function addActionMovies(key) {
 
  const slider=document.getElementById("Actionslider")

  const card= await createCardsDom(key)
  slider.append(card);
}
async function addComedyMovies(key) {
 
  const slider=document.getElementById("Comedyslider")

  const card= await createCardsDom(key)
  slider.append(card);
}
async function addSciFiMovies(key) {
 
  const slider=document.getElementById("Sci-fislider")

  const card= await createCardsDom(key)
  slider.append(card);
}
async function addHorrorMovies(key) {
 
  const slider=document.getElementById("Horrorslider")

  const card= await createCardsDom(key)
  slider.append(card);
}
async function addPopularMovies(key) {
 
  const slider=document.getElementById("Popularslider")

  const card= await createCardsDom(key)
  slider.append(card);
}

export { init, fetchCollection,addNewMovies,addActionMovies};
