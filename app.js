const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const Links = document.querySelector('.links');


// getElement
navToggle.addEventListener('click',function(){
    // linksContainer.classList.toggle("show-links");
 
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight  = Links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;

    }else{
        linksContainer.style.height = 0;
    }


})


//  fixed navbar || Scroll bar

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset)

    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
       if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");

    }else{
        navbar.classList.remove("fixed-nav");
    }


    if(scrollHeight > 500){
        topLink.classList.add("show-link");
    }else{
        topLink.classList.remove("show-link");
    }
})

