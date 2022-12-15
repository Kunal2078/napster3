const observer =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log('hi')
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
});
console.log('hhh')


const hiddenElements=document.querySelectorAll('.card')
hiddenElements.forEach((el)=>observer.observe(el));