const days = Array.from(document.querySelectorAll("div.daysList>.days"));
const btnToggle = document.querySelectorAll(".toggleDateDisplay");
const todayO = document.querySelector(".todayO");
const dayList = document.querySelector("div.dayList");
let date = new Date();

days[date.getDay].classList.add("presentDay");


for(let i=0; btnToggle<i; i++){
    btnToggle[i].addEventListener("click", ()=>{ 
    })

}