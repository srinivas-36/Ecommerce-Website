// Script for navigation bar
const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const clobtn=document.getElementById('close');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(clobtn){
    clobtn.addEventListener('click',()=>{
        nav.classList.remove('active');

    })
}