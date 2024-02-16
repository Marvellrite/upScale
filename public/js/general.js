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

