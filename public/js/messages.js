const searchHolder = document.querySelector(".searchHolder");
const messagesTable = document.querySelector(".messagesTable");
const messagesLarge = document.getElementsByClassName("messagesLarge");
const messagePreviews = document.querySelectorAll(".preview");
const messageSender = document.querySelectorAll(".sender");
let checkBoxes = document.querySelectorAll(".customCheckBox:not(.firstCheckbox)");
const noBooking = document.querySelectorAll(".noBookings")
let checkBox1 = document.querySelector(".firstCheckbox");
const deleteBtns = document.querySelectorAll(".delBtn");
const messages4SmallScreens = document.querySelector(".messagesSmall");
const messages4BigScreens = document.querySelector(".tableContainer table>tbody");
const cancelDelBtn = document.querySelectorAll(".cancel-delBtn");
const deleteAsk = document.querySelectorAll("div.delete-ask");
const delBtns2 = document.querySelectorAll(".btn-danger.delBtn");
const delConfirmed = document.querySelector(".delete-confirmation");
const loader = document.querySelector(".loader");
let bookings2BeDeleted = null;
const mScomputedStyle = window.getComputedStyle(messages4SmallScreens);
const mLcomputedStyle = window.getComputedStyle(messages4BigScreens);
let bookings;
// const messagesSmall = document.getElementsByClassName();


searchHolder.lastElementChild.addEventListener("focus", (e)=>{
    searchHolder.classList.add("boxEmphasis")
})

searchHolder.lastElementChild.addEventListener("blur", (e)=>{
    searchHolder.classList.remove("boxEmphasis")
})

for(let i = 0; i<messagePreviews.length; i++){
    messagePreviews[i].addEventListener("click", ()=>{
    window.location.href = "./message.html";
})
    messageSender[i].addEventListener("click", ()=>{
    window.location.href = "./message.html";
})
}


checkBox1.addEventListener("change", ()=>{


    if(checkBox1.checked){
        selectAllMessages();
        for(let i=0; i<deleteBtns.length; i++){
            deleteBtns[i].disabled = false;
    }
    }

    else{
        for(let i=0; i<deleteBtns.length; i++){
            deleteBtns[i].disabled = true;
        }
        unselectAllMessages();

    }

});

const addSelectMessagesEL = (allInputCheckboxes)=>{
    for(let i=0; i<allInputCheckboxes.length; i++){
        allInputCheckboxes[i].addEventListener("change", ()=>{
            if(allInputCheckboxes[i].checked){
                for(let i=0; i<deleteBtns.length; i++){
                deleteBtns[i].disabled = false;
            }}
            else{
                for(let i=0; i<deleteBtns.length; i++){
                    deleteBtns[i].disabled = true;
                }
                unselectAllMessages();

            }
        });
    }
}

function selectAllMessages(){
    for(let i=0; i<checkBoxes.length; i++){
        checkBoxes[i].checked = true;
    }
}

function unselectAllMessages(){
    for(let i=0; i<checkBoxes.length; i++){
        checkBoxes[i].checked = false;
    }
}

const placeBookingsAndAssignVariables = (bookings)=>{

    let time = null;
    if(bookings.length===0){
        for(let i=0; i<noBooking.length; i++){
            noBooking[i].classList.remove('d-none');
        }
        return ;
    }

    // For Small Screens
    {
        let bookings4SmallScreen = bookings.map((booking)=>{
            let nowHours = (((Date.now())/1000)/60)/60;
            let sentHours = (((booking.time)/1000)/60)/60;
            console.log(nowHours)
            console.log(sentHours)
            console.log('first')
            if((nowHours-sentHours) < 24){
                let sentTime = new Date(booking.time-Date.now());
                let options = {
                    hour: "numeric",
                    minute: "numeric"
                }
                time = sentTime.toLocaleString("en-US", options);
            }   
            else if((nowHours-sentHours) > 24 && (nowHours-sentHours)<48){
                time = 'Yesterday';
            }   
            else if ((nowHours-sentHours) > 48){
                let sentTime = new Date(booking.time-Date.now());
                let options = {
                    day: "numeric",
                    month: "short"
                }
                time = sentTime.toLocaleString("en-US", options);            
            }   

            return(
                `
            <div class=" d-flex justify-content-between messageSmall align-items-center">
                <div class="d-flex align-items-center allDetails">
                <input class="mx-2 form-check-input customCheckBox" title="select mail" type="checkbox" data-id="${booking._id}">
                <div class="d-flex flex-column details1">
                    <span class="sender fs-5 fw-bold">${booking.sender}</span>
                    <span class="preview " style="font-size:0.9em">${booking.preview}</span>
                </div>
                </div>
                <div class="time mx-1" style="font-size:0.8em; min-width:53px">
                ${time}
                </div>
            </div>
                `
            )
        }).join("");
        messages4SmallScreens.innerHTML = bookings4SmallScreen;

    }


    // For Large Screens
    {
        let bookings4BigScreen = bookings.map((booking)=>{
            return(
                        `
            <tr class="messagesLarge messages">
            <td class="marker text-center ps-0"><input class="form-check-input customCheckBox" type="checkbox" name="" data-id="${booking._id}"></td>
            <td class="sender">${booking.sender}</td>
            <td class="preview">${booking.preview}</td>
            <td style="font-size:0.8em; min-width:53px" class="time">${time}</td>
            </tr>
                        `
            )
        }).join("");

        messages4BigScreens.innerHTML = bookings4BigScreen;
    }
checkBoxes = document.querySelectorAll(".customCheckBox:not(.firstCheckbox)");
let allInputCheckboxes = document.querySelectorAll(`div.messageHolderGeneral input[type="checkbox"]`); 
addSelectMessagesEL(allInputCheckboxes);
}


renderBookings = async ()=>{
    try{
        //Get the Bookings
        const response = await fetch("/admin/viewBookings");
    
        if(!response.ok){
            throw new Error("An Error Occurred")
        }
        bookings = await response.json();
    
        // Add the bookings to the DOM 
        placeBookingsAndAssignVariables(bookings);
    }
    catch(err){
        alert(err);
    }
}

for(let i=0; i<cancelDelBtn.length; i++){
    cancelDelBtn[i].addEventListener("click", ()=>{
        cancelDelBtn[i].parentElement.parentElement.classList.add("d-none");
    })
}

for(let i=0; i<deleteBtns.length; i++){
    deleteBtns[i].addEventListener("click", ()=>{
        bookings2BeDeleted = document.querySelectorAll(`input.customCheckBox[type="checkbox"]:checked:not(.firstCheckbox)`);
        if (bookings2BeDeleted.length>1) {
            deleteAsk[0].classList.remove("d-none");
        }
        else{
            deleteAsk[1].classList.remove("d-none");

        }

    })
}


for(let i=0; i<delBtns2.length; i++){
    delBtns2[i].addEventListener("click", async()=>{
        delBtns2[i].parentElement.parentElement.classList.add("d-none");
        await deleteBookings();
    });
}

async function deleteBookings() {
    try{

        bookings2BeDeleted = Array.from(bookings2BeDeleted);
        let arrayOfIds = bookings2BeDeleted.map((booking)=>{
            return(
                booking.dataset.id
            )
        });
        arrayOfIds = JSON.stringify(arrayOfIds);
    
        let response = await fetch("/admin/deleteBookings", {
            method: "DELETE",
            body: arrayOfIds,
            headers: {
                "Content-Type":"application/json"
            }
    
        });
        if (!response.ok) throw new Error("Delete Operation was Unsuccessful");
        delConfirmed.classList.remove("d-none");
        loader.classList.remove("d-none");
        await renderBookings();
        loader.classList.add("d-none");
        setTimeout(() => {
            delConfirmed.classList.add("d-none");    
        }, 1200);
    }
    catch(err){
        alert("An error occured")
    }

}

renderBookings();
