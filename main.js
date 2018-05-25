// normal function --> hvor filnavnet for svg'en og modtagerelementet er defineret som parameters
function jsonLoaded(svgPath,element){

    // fetch og load SVG'en til DOM'en
    fetch(svgPath)
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            document.querySelector(element).innerHTML = data;
            jsonLoaded();
        })
    }
    
    
    jsonLoaded("https://kea-alt-del.dk/customersupport/?count=10", "#template_modtager", function(){
        document.querySelector("#bike").style.display = "none";
        console.log("svg2 er loaded");
    });