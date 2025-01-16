const nav = document.getElementById("navbar");
let lastScroll = 0;
const improvise = document.getElementById("imgImprovise");
const popUp = document.querySelector(".pop-up");
const closeBtn = document.getElementById("closeBtn");
let playOnce = true;

//scrollEvent navbar//
window.addEventListener("scroll", () => {
    if (window.scrollY > lastScroll) {
        nav.style.height = "45px";
    } else {
        nav.style.height = "90px"
    }
    lastScroll = window.scrollY

    //scrollEvent picture//
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    //window.innerHeight=Hauteur de la fenêtre visible//
    //offsetHeight est une propriété utilisée pour obtenir la hauteur totale d'un élément visible dans le DOM//

    if (scrollValue > 0.45) {
        improvise.style.transform = "translateX(0px)";
        improvise.style.opacity = "1";
    }

    //scrollEvent popUp
    if (scrollValue > 0.85 && playOnce) {
        popUp.style.opacity = 1;
        popUp.style.transform = "translateX(0px)";
        playOnce = false;
        //playOnce=false pour eviter que popUp ne se rejoue
    }
});

//close
closeBtn.addEventListener("click", () => {
    popUp.style.opacity=0
    popUp.style.transform="translateX(400px)"
});






