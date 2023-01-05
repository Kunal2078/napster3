// const { spawn } = require("child_process");


document.addEventListener("click", (e) => {
  let handle;
  if (e.target.matches(".handle")) {
    handle = e.target;
  } else {
    handle = e.target.closest(".handle");
  }
  if (handle != null) onHandleClick(handle);
  console.log(handle);
});
function newFunction() {
  $(window).on("load", function () {
    $(".loader-wraper").fadeOut("fast");
  });
}

function onHandleClick(handle) {
  const slider = handle.closest(".container1").querySelector(".slider");
  const sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue("--slider-index")
  );
  if (handle.classList.contains("prev")) {
    slider.style.setProperty("--slider-index", sliderIndex - 1);
  }
  if (handle.classList.contains("next")) {
    slider.style.setProperty("--slider-index", sliderIndex + 1);
  }
  if (sliderIndex > 2) {
    slider.style.setProperty("--slider-index", sliderIndex - 3);
  }
  console.log(sliderIndex);
}


// const video = document.querySelector('video');

// function startPreview() {
//   video.muted = false;
//   video.currentTime = 2;
//   video.playbackRate = 1;
//   video.play();
// }

// function stopPreview() {
//   video.currentTime = 5;
//   video.playbackRate = 1;
//   video.pause();
// }
// let previewTimeout = null;
// video.addEventListener("mouseenter", () => {
//   startPreview();
//   previewTimeout = setTimeout(stopPreview, 400000);
// });

// video.addEventListener("mouseleave", () => {
//   clearTimeout(previewTimeout);
//   previewTimeout = null;
//   stopPreview();
// });

function playmovie(){
  document.body.innerHTML =document.body.innerHTML +'<div class="content" id="data" ></div>'
  document.getElementById('data').style.display='flex'

  let content=document.getElementById('data')
  let div=document.createElement('div');
  div.setAttribute('class','movie-container')
  let backBtn=document.createElement('span')
  // backBtn.setAttribute('type','button')
 backBtn.setAttribute('class','back-btn')
 backBtn.setAttribute('onclick','back()')

  let i=document.createElement('i')
  i.setAttribute('class','fa-solid fa-arrow-left')
  backBtn.append(i)
  div.appendChild(backBtn)

  let video=document.createElement('video')

  video.setAttribute('autoplay','autoplay')
  video.setAttribute('controls','controls')
  video.setAttribute('id','full-sreenVideo')
  video.setAttribute('ref','{fullSreenVideoRef}')
  let source=document.createElement('source')
  source.setAttribute('src','/public/frontend/vv/@YT_Movies Spider-Man_ No Way Home (2021) English HQ BR-Rip.mkv')
  source.setAttribute('type','video/mp4')
  video.appendChild(source)
  div.appendChild(video)
  content.append(div)
  
 document.getElementById('navbar').style.position='unset'
 document.getElementById('container1').style.display='none'
}
function back(){
 
  let video=document.getElementById('full-sreenVideo')
  video.pause()
  let div=document.getElementById('data')
  let child=document.getElementsByClassName('movie-container')
div.remove(video)

  // document.getElementById('data').style.display='none'
  document.getElementById('navbar').style.position='fixed'
  document.getElementById('container1').style.display='block'
}
function info(){
  document.getElementById('info-container').style.display='none'

}
function moreinfo(){

  document.getElementById('info-container').style.display='flex'

}
toggleFullScreen = () => {
  var el = document.getElementById("full-screenVideo");
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  }
};

function useremail(){
 const user = document.getElementById('user-email').value
localStorage.clear()
 localStorage.setItem('user',user)
}
