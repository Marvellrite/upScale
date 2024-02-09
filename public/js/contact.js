const days = Array.from(document.querySelectorAll("div.daysList>div.days"));
const btnToggle = document.querySelectorAll("button.toggleDateDisplay");
const todayHolder = document.querySelector("div.today");
const today = document.querySelector("p.today>span");
const dayList = document.querySelector("div.daysList");
let date = new Date();

console.log(days);
console.log(date.getDay());
console.log(days[date.getDay()]);

days[date.getDay()].classList.add("presentDay");


for(let i=0; i<btnToggle.length; i++){
    btnToggle[i].addEventListener("click", ()=>{ 
        console.log("first")
        todayHolder.classList.toggle("d-none");
        dayList.classList.toggle("d-none");
    })

}

today.innerHTML = date.getDay == 0 || date.getDay == 6? "Closed today": "Open today";