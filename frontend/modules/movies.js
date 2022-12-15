import config from "../conf/index.js";

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
        addMoviestoDOM(key.id, key.Imageurl, key.name, key.trailerUrl, key.bio, key.movieUrl);
      });
}

//Implementation of fetch call
async function fetchCollecton() {
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

//Implementation of DOM manipulation to add cities
function addMoviestoDOM(id, Imageurl, name, trailerUrl,bio,movieUrl) {
  // TODO: MODULE_CITIES

  // 1. Populate the City details and insert those details into the DOM
  const data=document.getElementById("data")
  const col=document.createElement('div')
  col.setAttribute('class','col-lg-3 p-3 col-md-6 col-sm-8')
  col.setAttribute('style','width:20rem')

  const parentdiv=document.createElement('div')
  parentdiv.setAttribute("class", 'card ');
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
col.appendChild(parentdiv)
data.appendChild(col);


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
    generateFilterPillsAndUpdateDOM,};
