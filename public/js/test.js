let cards = document.querySelectorAll(".child>div");
let span = document.querySelector(".child>span");
let card = document.querySelector(".child>div");
let header = document.querySelector("h1");
let counter = 0;

// console.log(card)
// console.log(cards)

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        entry.target.classList.toggle("color", entry.isIntersecting)
    }
    )
    // console.log(entries);
    // console.log(counter);
    // counter++
}, {
    threshold: 0.5,
    rootMargin:"-50px"
});

Array.from(cards).forEach((card)=>{
    observer.observe(card);

})
// observer.observe(span);
observer.observe(header);