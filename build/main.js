"use strict";

document.addEventListener("DOMContentLoaded", getJson);

async function getJson(){
    
    // find DOM elementer
    let template = document.querySelector("#template_modtager");
    let eventscontainer = document.querySelector("#template_container");
     
    // hent json
    let jsonObject = await fetch("https://kea-alt-del.dk/customersupport/?count=10"); 
    let events = await jsonObject.json();
    
//  events.sort(function (a, b) {
//      return a.acf.title.localeCompare(b.acf.title);
//    });
    
    events.forEach(function(event){
        
    // klon template og vis i DOM
    let klon = template.cloneNode(true).content;
        
    klon.querySelector(".first").textContent = event.first;
    klon.querySelector(".last").textContent = event.last;
    klon.querySelector(".message").textContent = event.message;
 //   klon.querySelector(".date").textContent = event.date;
 eventscontainer.appendChild(klon);
    });

}
