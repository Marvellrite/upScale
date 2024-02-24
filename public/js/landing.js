// const slideRadios = document.querySelectorAll(".input-radio");
// let sliderNo = 1;
// let lastTwo;

// setInterval(() => {
//     if(sliderNo==slideRadios.length){
//         sliderNo=0;

//     }

//     document.querySelector(".input-radio"+sliderNo).checked = true;
//     document.querySelector(".label"+sliderNo).classList.add("selected");
//     document.querySelector(`.testimony${sliderNo}`).classList.add("show-testimony");
//     // document.querySelector(`.testimony${sliderNo}`).classList.remove("d-none");

//     document.querySelector(`.label${(sliderNo==0?slideRadios.length:sliderNo)-1}`).classList.remove("selected");
//     document.querySelector(`.testimony${(sliderNo==0?slideRadios.length:sliderNo)-1}`).classList.add("hide-left-testimony");
    

//     if(sliderNo-2==-1){
//         lastTwo = 2;
//     }
//     else if(sliderNo-2==-2){
//         lastTwo = 1;
//     }
//     else{
//         lastTwo = sliderNo-2;
//     }

//     document.querySelector(`.testimony${lastTwo}`).classList.remove("hide-left-testimony", "show-testimony");
//     // setTimeout(() => {
//     //     document.querySelector(`.testimony${(sliderNo==0?slideRadios.length:sliderNo)-1}`).classList.add("d-none");
//     // }, 400);
//     sliderNo++;
// }, 5000);

const servicesHolder = document.querySelector("div.servicesHolder");
const servicesHolderPar = document.querySelector("div.serviceHolderPar");
const service = document.querySelector("div.servicesHolder div.service");
const allService = Array.from(document.querySelectorAll("div.servicesHolder div.service"));
const computedStylesHolder = window.getComputedStyle(servicesHolder);
const computedStylesService = window.getComputedStyle(service);
// To assign the needed gap for the care services
{
    let widthHolder = computedStylesHolder.width.slice(0, -2);
    console.log(widthHolder);
    let widthService = computedStylesService.width.slice(0, -2);
    
    // The calculations needed to give perfect spacing and adjustments
    let totalWidthServ = widthService*3;

    if(widthHolder<totalWidthServ){
        allService.forEach(service=>{
            service.classList.add("w31");
            widthHolder = computedStylesHolder.width.slice(0, -2);
            widthService = computedStylesService.width.slice(0, -2);
            totalWidthServ = widthService*3;
        })
    }
    let remanantSpace = widthHolder - totalWidthServ;
    let gap = Math.round(remanantSpace / 2);

    servicesHolder.style.gap  = `${gap}px`;
    servicesHolderPar.style.minWidth = computedStylesHolder.width;
}

{
    // Service Slider
    servicesHolder.style.marginLeft = "0px";
    // btnLeft.addEventListener("click", ()=>{
    //     servicesHolder.style.marginLeft = `${parseInt(servicesHolder.style.marginLeft.slice(0, -2)) + 1259}px`;
        
    // })
}