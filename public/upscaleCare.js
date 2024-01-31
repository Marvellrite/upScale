const careService1 = document.querySelector('.careService1')
const moreButton = document.querySelector('.moreButton')
const careService2 = document.querySelector('.careService2')
const answer = document.querySelector('.answer')
const buttons = document.querySelectorAll('.buttons')
const faBars = document.querySelector('.fa-bars')
const faTimes = document.querySelector('.fa-times')
const faButtons = document.querySelectorAll('.faButtons')
const listItems = document.querySelector('.list-items li')
const bookNowbtn = document.querySelectorAll('.bookNowbtn')
const countrySelect = document.getElementById('countrySelect');
const countrySelectOption = document.getElementsByClassName('countrySelectOption')
const backward = document.querySelector('.backward')
moreButton.onclick = () => {
    console.log(careService2.classList);
    if (careService2.classList.contains('hidden')) {
        careService2.classList.remove('hidden')
        careService1.classList.add('hidden')
        moreButton.textContent = 'Less'
    }else{
        careService2.classList.add('hidden')
        careService1.classList.remove('hidden')
        moreButton.textContent = 'More'
    }  
    // careService1.classList.toggle('hidden')
    // careService2.classList.toggle('hidden')
}

buttons.forEach((button) => {
    button.onclick = (e) => {
        const parenting = e.target.parentElement.parentElement.parentElement.parentElement
        // console.log(parenting);
        parenting.classList.toggle('show-text')
        
    }
})

faBars.onclick = () => {
    
}
faButtons.forEach((faButton) => {
    faButton.onclick = (e) => {
        const fabtn = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

        fabtn.classList.toggle('stuff-items')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    AllCountrySelect()
    
});

// const AllCountrySelect = () => {
//     fetch('https://restcountries.com/v2/all')
//       .then(response => response.json())
//       .then(data => {
//         data.forEach((country) => {
//             callingCodes = country.callingCodes
//             alpha3Code = country.alpha3Code
//             flag = country.flag
//             const markup = `<option>${country.callingCodes[0]} ${country.alpha3Code} ${country.flag}</option>`
//                 option.value = country.callingCodes[0];
//                 option.textContent = `${country.callingCodes[0]} ${country.alpha3Code} ${country.flag}`;
//                 countrySelect.appendChild(markup);
//                 console.log(markup);
//         })
        
//       })
//       .catch(error => console.error('Error fetching country data:', error));
//   }

bookNowbtn.forEach((bookNowbtns) => {
    bookNowbtns.onclick = () => {
    window.location.href = 'upscaleBookPage.html'
}
})

