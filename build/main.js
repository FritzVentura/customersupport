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
    let clicked;
        
    klon.querySelector(".first").textContent = event.first;
    klon.querySelector(".last").textContent = event.last;
    klon.querySelector(".message").textContent = event.message;

    klon.querySelector(".full").textContent = event.full;
  

    let btn1 = document.querySelector("button");

    btn1.addEventListener("click", function loadText(){
    klon.querySelector(".full").style.display = "inherit";
    });
    

 eventscontainer.appendChild(klon);
    });

    if (event.importance < 25){
        klon.querySelector(".textbox").style.background = yellow;
    } else if (event.importance < 50 ){
        klon.querySelector(".textbox").style.background = green;
    } else if (event.importance < 75 ){
        klon.querySelector(".textbox").style.background = orange;
    } else {
        klon.querySelector(".textbox").style.background = red;
    }

}
