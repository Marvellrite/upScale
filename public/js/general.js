const logoNav = document.querySelector("div.logoNav");


window.addEventListener("scroll", ()=>{
    const scrollLength = 40;
    const scrolled = window.scrollY;
    if(scrolled>=scrollLength && logoNav.classList.contains("logoNavNoScroll")){
        return logoNav.classList.remove("logoNavNoScroll")
    }
    else if(scrolled<scrollLength && !logoNav.classList.contains("logoNavNoScroll")){
        return logoNav.classList.add("logoNavNoScroll")
    }
        return;


})


/** For the navbar */

{
    const navBarHider = document.querySelector(".hideNavbar");
    const navConatiner = document.querySelector(".navContainer");
    const bodyOverlay = document.querySelector(".bodyOverlay");
    navBarHider.addEventListener("click", ()=>{
        navConatiner.classList.toggle("moveLeft");
        bodyOverlay.classList.toggle("bodyOverlayAction");
        bodyOverlay.classList.toggle("d-none");

    })

    const showMenuIcon = document.querySelector(".showMenu");
    showMenuIcon.addEventListener("click", ()=>{
        navConatiner.classList.toggle("moveLeft");
        bodyOverlay.classList.toggle("bodyOverlayAction");
        bodyOverlay.classList.toggle("d-none");
    })

}
