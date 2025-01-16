const logoNav = document.querySelector("div.hero-image-holder");
const logoImg = document.querySelector("img.logoImg");
console.log(logoNav);

window.addEventListener("scroll", (e) => {
  const target = e.target;
  const scrollLength = 60;
  const scrolled = window.scrollY;

  if (
    scrolled >= scrollLength &&
    !logoImg.classList.contains("logoNavScrolled")
  ) {
    // logoImg.classList.remove("");
    return logoImg.classList.add("logoNavScrolled");
  } else if (
    scrolled < scrollLength &&
    logoImg.classList.contains("logoNavScrolled")
  ) {
    // logoImg.classList.add("");
    return logoImg.classList.remove("logoNavScrolled");
  }
  return;
});

/** For the navbar */

// {
//     const navBarHider = document.querySelector(".hideNavbar");
//     const navConatiner = document.querySelector(".navContainer");
//     const bodyOverlay = document.querySelector(".bodyOverlay");
//     navBarHider.addEventListener("click", ()=>{
//         navConatiner.classList.toggle("moveLeft");
//         bodyOverlay.classList.toggle("bodyOverlayAction");
//         bodyOverlay.classList.toggle("d-none");

//     })

//     const showMenuIcon = document.querySelector(".showMenu");
//     showMenuIcon.addEventListener("click", ()=>{
//         navConatiner.classList.toggle("moveLeft");
//         bodyOverlay.classList.toggle("bodyOverlayAction");
//         bodyOverlay.classList.toggle("d-none");
//     })

// }
