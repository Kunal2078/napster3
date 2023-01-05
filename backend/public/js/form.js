

function fun() {
    let box = document.querySelectorAll('.info-container')


    document.querySelectorAll('.more-info').forEach(Element => {
      Element.onclick = () => {
        let name = Element.getAttribute('data-name');

        box.forEach(e => {
          let target = e.getAttribute('data-target');


          if (name == target) {
            e.classList.add('active');
          }
        });
      };
    });
  }

  
  function aclose(id) {
 
    
    let data = document.getElementById(id)
    data.classList.remove('active');
    let iframe = document.getElementsByClassName('youtube-trailer')
    

    
  }

  function card(){


let data1=document.querySelectorAll('.cards')


data1.forEach(e =>{
e.addEventListener('click',e=>{
 console.log(e.target.children[1])
 e.target.children[1].classList.add('active')
 let infocontainer=document.getElementsByClassName('info-container')
 console.log(infocontainer)
})
})  

}



setTimeout(fun, 1000)
setTimeout(card, 1000)
