const slideRadios = document.querySelectorAll(".input-radio");
let sliderNo = 1;
let lastTwo;

setInterval(() => {
    if(sliderNo==slideRadios.length){
        sliderNo=0;

    }

    document.querySelector(".input-radio"+sliderNo).checked = true;
    document.querySelector(".label"+sliderNo).classList.add("selected");
    document.querySelector(`.testimony${sliderNo}`).classList.add("show-testimony");
    // document.querySelector(`.testimony${sliderNo}`).classList.remove("d-none");

    document.querySelector(`.label${(sliderNo==0?slideRadios.length:sliderNo)-1}`).classList.remove("selected");
    document.querySelector(`.testimony${(sliderNo==0?slideRadios.length:sliderNo)-1}`).classList.add("hide-left-testimony");
    

    if(sliderNo-2==-1){
        lastTwo = 2;
    }
    else if(sliderNo-2==-2){
        lastTwo = 1;
    }
    else{
        lastTwo = sliderNo-2;
    }

    document.querySelector(`.testimony${lastTwo}`).classList.remove("hide-left-testimony", "show-testimony");
    // setTimeout(() => {
    //     document.querySelector(`.testimony${(sliderNo==0?slideRadios.length:sliderNo)-1}`).classList.add("d-none");
    // }, 400);
    sliderNo++;
}, 5000);