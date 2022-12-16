import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let collection = await fetchCollecton();

  let Newcategory = ["New"];
  let newlist = collection.filter((element) =>
    Newcategory.includes(element.category)
  );

  //Updates the DOM with the cities
  newlist.forEach((key) => {
    addMoviestoDOM(
      key.id,
      key.Imageurl,
      key.name,
      key.trailerUrl,
      key.bio,
      key.movieUrl,
      key.category,
      key.director,
      key.cast,
      key.writer,
      key.movieAbout,
      key.rating
    );
  });
}

//Implementation of fetch call
async function fetchCollecton() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try {
    let fetchdcollection = await fetch("http://192.168.1.7:8082/collection");
    let array = fetchdcollection.json();

    return array;
  } catch (err) {
    return null;
  }
}

//Implementation of DOM manipulation to add cities
async function addMoviestoDOM(
  id,
  Imageurl,
  name,
  trailerUrl,
  bio,
  movieUrl,
  category,
  director,
  cast,
  writer,
  movieAbout,
  rating
) {
  // TODO: MODULE_CITIES

  // 1. Populate the City details and insert those details into the DOM
  const data = document.getElementById("data");
  const col = document.createElement("div");
  col.setAttribute("class", "col-lg-3 p-3 col-md-6 col-sm-8");
  col.setAttribute("style", "width:20rem");

  data.append(col);
  col.innerHTML = `
<div class="card " id="card" style="width:18rem">

<div class="image-container">

    <img class="card-img-top" src="${Imageurl}" id="${name}"  >
    <div class="card-details">
      <h5 class="card-title">${name}
      </h5>
      <form class="form">
        <div style="display:flex;gap:13px">
         <a href='../watch/?id=${id}'>
         <button type="button" class="play-button"><i class="fa-solid fa-play"></i> <span class="btn-text">
         Play </span></button>
         </a>
          <button type="button" class="like-button"> <i class="fa-solid fa-thumbs-up"> </i></button>
          </div>
            <button class="more-info" type="button" data-name=${id} ><i
                class="fa-sharp fa-solid fa-chevron-down"></i> </button>
      </form>
    </div>
    </div>
    </div>
    

    <div class="info-container" id="${id}" data-target="${id}">
    <div class="filter-body"></div>
    <div class="info-details">
      <button class="close" onclick="aclose(${id})"> <i class="fa-solid fa-xmark"> </i></button>
      <div class="info-trailer-container">
        <iframe class="youtube-trailer" src=${trailerUrl} frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true">
        </iframe>
      </div>
      <div class="movie-details">
        <div>
          <div class="category-container d-flex flex-column">
            <div class="category-items"> ${category} </div>
          </div>
          <p class="movie-title">
            ${name} </p>
          <p class="movie-description">
            ${bio}
          </p>
          <form style="gap:20px ;display:flex">
            <a href='../watch/?id=${id}'>
              <button type="button" class="info-play-button"> Play <i class="fa-solid fa-play"> </i></button>
            </a>
            <button class="like-button"> <i class="fa-solid fa-thumbs-up"> </i></button>
            <span class="d-flex align-items-center"><i class="fa-solid fa-star"></i> <p class="m-0 ps-2">${rating}/10</p></span>
          </form>
        </div>
        <div class="cast-container d-flex flex-row">
          <div class="bg-light  m-5-lg  mt-5 ms-0" style="width:1px;margin-right:20px !important"></div>
          <div class="d-flex flex-column " style="padding: 30px 36px 30px 0;justify-content:space-evenly;">
            <span style="color:grey">Cast: <span style="color:#fff">${cast}</span></span>
            <span style="color:grey">Genre: <span style="color:#fff">${category}</span></span>
            <span style="color:grey">This movie is: <span style="color:#fff">${movieAbout}</span></span>

          </div>
        </div>
      </div>
      <div class="movies-container mx-5">
      <h1>More Like This</h2>
      <div class="row" id="suggestions-${id}">

      </div>
      </div>
      <div class="About-movie-container ms-5">
        <h1>About ${name}</h1>
        <div class="d-flex flex-column justify-content-around" style="padding: 20px 36px 30px 0;">
          <span class="p-1" style="color:grey">Director: <span style="color:#fff">${director}</span></span>
          <span class="p-1" style="color:grey">Cast: <span style="color:#fff">${cast}</span></span>
          <span class="p-1" style="color:grey">Writer: <span style="color:#fff">${writer}</span></span>
          <span class="p-1" style="color:grey">Genres: <span style="color:#fff">${category}</span></span>
          <span class="p-1" style="color:grey">This movie is: <span style="color:#fff">${movieAbout}</span></span>

        </div>
      </div>
    </div>
  </div>

`;
//suggestions loop//
try {
  let collection = await fetchCollecton();
  
  let Newcategory = ["New","Action","Popular"];
  let suggetionsList = collection.filter((element) =>
    Newcategory.includes(element.category)
    )
  
    for(let i=0;i<9;i++){
      console.log(suggetionsList[i])
      addSuggestionstoDOM(suggetionsList[i]);
    }
  
} catch (error) {
  console.log(error)
} 
function addSuggestionstoDOM(key){
  
  const data = document.getElementById(`suggestions-${id}`);
  const col = document.createElement("div");
  col.setAttribute("class", "col-lg-3 p-3 col-md-6 col-sm-8");
  col.setAttribute("style", "width:20rem");

  data.append(col);
  col.innerHTML=`
  <div class="card " id="card" style="width:18rem">

<div class="image-container">

    <img class="card-img-top" src="${key.Imageurl}" id="${key.name}"  >
    <div class="card-details">
      <h5 class="card-title">${key.name}
      </h5>
      <form class="form">
        <div style="display:flex;gap:13px">
         <a href='../watch/?id=${key.id}'>
         <button type="button" class="play-button"><i class="fa-solid fa-play"></i> <span class="btn-text">
         Play </span></button>
         </a>
          <button type="button" class="like-button"> <i class="fa-solid fa-thumbs-up"> </i></button>
          </div>
            <button class="more-info" type="button" data-name=${key.id} ><i
                class="fa-sharp fa-solid fa-chevron-down"></i> </button>
      </form>
    </div>
    </div>
    </div>`
}

}

export {
  init,
  fetchCollecton,
  addMoviestoDOM
};