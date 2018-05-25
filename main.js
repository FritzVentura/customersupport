// normal function --> hvor filnavnet for svg'en og modtagerelementet er defineret som parameters
function jsonLoaded(svgPath,element,callBack){

    // fetch og load SVG'en til DOM'en
    fetch(svgPath)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            
            callBack(data);
        })
    }
    
    
    jsonLoaded("https://kea-alt-del.dk/customersupport/?count=10", "#template_modtager", showData);


    function showData(data){
        //  document.querySelector("#bike").style.display = "none";
          console.log("json er loaded", data);
      }