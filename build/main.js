"use strict";

document.addEventListener("DOMContentLoaded", getJson);

async function getJson(){
    
    // find DOM elementer
    let template = document.querySelector("#template_modtager");
    let eventscontainer = document.querySelector("#template_container");
     
    // hent json
    let jsonObject = await fetch("https://kea-alt-del.dk/customersupport/?count=10"); 
    let events = await jsonObject.json();
    
    /*   events.sort(function (a, b) {
        return a.first.localeCompare(b.first);
        }); */
    
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
  

    if (event.importance < 25){
        klon.querySelector(".textbox").style.background = "#fb1";
    } else if (event.importance < 50 ){
        klon.querySelector(".textbox").style.background = "#bada55";
    } else if (event.importance < 75 ){
        klon.querySelector(".textbox").style.background = "#fa7a55";
    } else {
        klon.querySelector(".textbox").style.background = "#d11d05";
    } 


    let btn1 = klon.querySelector(".butt");

    btn1.addEventListener("click", function(event){
        
        // find target
        let clicked = event.target;
        console.log("dubbi",clicked);

        // find targets prevoius sibling = full
        let targetClick = clicked.previousSibling.previousSibling;
        console.log("HANSEN",targetClick);


        document.querySelector(".full").style.display = "inherit"; 

    });
    

 eventscontainer.appendChild(klon);

    });

}
