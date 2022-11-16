// dichiarazione variabili
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const btnUPEl = document.querySelector(".btn_up");
const btnDownEl = document.querySelector(".btn_down");
const imgContainerEl = document.querySelector(".img_container");
const imgEl = document.createElement("img");
const textEl = document.createElement("div");

let currentImg = 1;

/************************SLIDER BASE************************/ 

//inserisco immagine iniziale
imgEl.src = `imgs/${images[currentImg -1].image}`;
textEl.classList.add("text_container");
textEl.innerHTML = `<h2>${images[currentImg -1].title}</h2><p>${images[currentImg -1].text}</p>`
imgContainerEl.append(imgEl, textEl);

// btn_UP click
btnUPEl.addEventListener("click", function(){
    

    // reset contatore immagine quando arriva alla fine
    if(currentImg === images.length){
        currentImg = 0;
    }

    // aumento contatore e display immagine
    currentImg++ ;
    imgEl.src = `imgs/${images[currentImg -1].image}`;
    imgEl.classList.add(".position-relative");
    textEl.classList.add("text_container");
    textEl.innerHTML = `<h2>${images[currentImg -1].title}</h2><p>${images[currentImg -1].text}</p>`
    imgContainerEl.innerHTML = "";
    imgContainerEl.append(imgEl,textEl);
})


// btn_DOWN click
btnDownEl.addEventListener("click", function(){
    // reset contatore immagine quando arriva alla fine
    if(currentImg === 1){
        currentImg = images.length +1;
    }

    // decremento contatore e display immagine
    currentImg-- ;
    imgEl.src = `imgs/${images[currentImg - 1].image}`;
    imgContainerEl.innerHTML = "";
    textEl.classList.add("text_container");
    textEl.innerHTML = `<h2>${images[currentImg -1].title}</h2><p>${images[currentImg -1].text}</p>`
    imgContainerEl.append(imgEl,textEl);
})


/************************SLIDER con miniature************************/ 