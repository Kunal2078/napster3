function getIdFromURL(search) {
  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let returnIdArray = search.split("=");
  let id = returnIdArray[1];
  console.log(id);
  return id;
}

async function fetchMovies(ID) {
  // TODO: MODULE_ADVENTURES`

  // 1. Fetch adventures using the Backend API and return the data
  try {
    let fetchdcities = await fetch(`http://127.0.0.1:8082/movie/?id=${ID}`);

    let array = await fetchdcities.json();

    return array;
  } catch (err) {
    return null;
  }
}

function addMovieToDOM(movie) {
  let iframe = movie.movieUrl;
  
  document.getElementById("data").innerHTML =iframe

}
export { getIdFromURL, fetchMovies, addMovieToDOM };
