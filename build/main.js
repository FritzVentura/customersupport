"use strict";

document.addEventListener("DOMContentLoaded", getJson);

async function getJson(){
    
// find DOM elementer - TEMPLATE + MODTAGER
    let template = document.querySelector("#template_modtager");
    let eventscontainer = document.querySelector("#template_container");
     
// hent json
    let jsonObject = await fetch("https://kea-alt-del.dk/customersupport/?count=10"); 
    let events = await jsonObject.json();
    
    
// FUNCTION FOR HVER KLON I TEMPLATEN
    events.forEach(function(event){
        
// klon template og vis i DOM
    let klon = template.cloneNode(true).content;
        
    klon.querySelector(".first").textContent = event.first;
    klon.querySelector(".last").textContent = event.last;
    klon.querySelector(".message").textContent = event.message;
    klon.querySelector(".full").textContent = event.full;
    klon.querySelector(".year").textContent = event.time.year;
    klon.querySelector(".month").textContent = event.time.month;
    klon.querySelector(".day").textContent = event.time.day;
  

// SKIFT FARVE VED IMPORTANCE VÆRDI
    if (event.importance < 25){
        klon.querySelector(".textbox").style.background = "#fb1";
    } else if (event.importance < 50 ){
        klon.querySelector(".textbox").style.background = "#bada55";
    } else if (event.importance < 75 ){
        klon.querySelector(".textbox").style.background = "#fa7a55";
    } else {
        klon.querySelector(".textbox").style.background = "#d11d05";
    } 

    
// KNAP 1
    let btn1 = klon.querySelector(".butt");

    btn1.addEventListener("click", function(event){
        
        // find target
        let clicked = event.target;
        console.log("butt1 er clicked - event target",clicked);

        // find targets prevoius sibling = full
        let targetClick = clicked.previousSibling.previousSibling;
        console.log("Previous Sibling",targetClick);

        // VIS TEXTBOX
        //targetClick.style.display = "inherit"; 

        targetClick.classList.add("boxIn");

    });


// KNAP 1
    let btn2 = klon.querySelector(".butt2");

    btn2.addEventListener("click", function(event){
        
        // find target
        let clicked2 = event.target;
        console.log("Butt2 er clicked - event target",clicked2);

        // find targets parentelement = textbox
        let targetClick2 = clicked2.parentElement;
        console.log("Parent Element - textbox",targetClick2);

        /* 
         let targetClick3 = clicked2.previousSibling;
        console.log("Previous Sibling - butt1 ") */

        /* let targetClick4 = clicked2.previousSibling.previousSibling;
        console.log("Previous Sibling - .full ") */

        targetClick2.classList.add("boxOut");
        event.target.style.display = "none";
        

        setTimeout(function(){ alert("Task is signed, sealed and delivered"); }, 1800);

    });
    
// INDSÆT HVER KLON I TEMPLATE
 eventscontainer.appendChild(klon);

    });

}
