// import config from "../conf/index.js";

// async function init() {
//   //Fetches list of all cities along with their images and description
//   let collection= await fetchCollecton();

  
//   //Updates the DOM with the cities
//   collection.forEach((key) => {
//     addMoviestoDOM(key.id, key.Imageurl, key.name, key.trailerUrl, key.bio, key.movieUrl);
//   });
 

// }
function addCollectiontoDOM(collection){
    collection.forEach((key) => {
        addMoviestoDOM(key);
      });
}

//Implementation of fetch call
async function fetchCollecton() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
 try{

   let fetchdcollection = await fetch("http://127.0.0.1:8082/collection");
   let array= fetchdcollection.json();
 
   console.log(array)
   return array;
 }
 catch(err){
  return null;
 }
}

//Implementation of DOM manipulation to add cities
async function addMoviestoDOM(item) {
  // TODO: MODULE_CITIES

  // 1. Populate the movies details and insert those details into the DOM
  const data = document.getElementById("data");
  const col = document.createElement("div");
  col.setAttribute("class", "col-lg-3 p-3 col-md-6 col-sm-8 cards timeout");
  col.setAttribute("style", "width:20rem");

  data.append(col);
  col.innerHTML = `
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
  <div class="movies-container ms-5">
  <h1>More Like This</h2>
  <div class="row" id="suggestions${item.id}">

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
  
  const data = document.getElementById(`suggestions${item.id}`);
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
function filterByCategory(collection,categoryList) {
    // TODO: MODULE_FILTERS
    // 1. Filter adventures based on their Category and return filtered list
    let newlist=collection.filter(element=> categoryList.includes(element.category))
    
    return newlist;
  }


function filterFunction(collection, filters) {
    // TODO: MODULE_FILTERS
    // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
    // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods
  
  
    
    // let Category=filters.category
   
   console.log(filters)
    
  
    if(filters.category.length> 0)
    {
      collection=filterByCategory(collection,filters.category)
    }
   
    
    console.log(collection)
  
    // Place holder for functionality to work in the Stubs
    return collection;
  }


function saveFiltersToLocalStorage(filters) {
    // TODO: MODULE_FILTERS
    // 1. Store the filters as a String to localStorage
    let jsonFilters=JSON.stringify(filters)
    localStorage.setItem('filters',jsonFilters)
  
    return true;
  }
  
  //Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
  function getFiltersFromLocalStorage() {
    // TODO: MODULE_FILTERS
    // 1. Get the filters from localStorage and return String read as an object
  JSON.parse(localStorage.getItem('filters'))
    // Place holder for functionality to work in the Stubs
    return null;
  }


function generateFilterPillsAndUpdateDOM(collection) {
    // TODO: MODULE_FILTERS
    // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills
    let category=collection.category
    
    let categorylist=document.getElementById("category-list")
    if(category.length>0){
  
      category.forEach((e,i)=>
      {
        let div= document.createElement('div')
        div.setAttribute('class','category-filter')
        let span=document.createElement('span')
        span.textContent=category[i]
       
        div.appendChild(span)
        categorylist.append(div)
        
      })
    }
  }

export {  fetchCollecton,addMoviestoDOM,addCollectiontoDOM,
    filterByCategory,
    filterFunction,
    saveFiltersToLocalStorage,
    getFiltersFromLocalStorage,
    generateFilterPillsAndUpdateDOM
  };
