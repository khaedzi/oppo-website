var submit=document.getElementById("submit2");
var submitOne=document.getElementById("submitOne");
submit.addEventListener("submit",handle);


function handle(event) {
event.preventDefault();

let valueSearch=event.target.koo.value;
let changeVAlueToArray=valueSearch.split(" ");
let vlaueWitOutSapce=changeVAlueToArray.join("");
let valueToLowerCase=vlaueWitOutSapce.toLowerCase();
let reno4Array=["r","R","e","E","N","n","O","o"];

if(valueToLowerCase==null || valueToLowerCase==undefined || valueToLowerCase==""){
    swal({title:"Search location is empty !!",
    icon: "warning",});
}
else if(valueToLowerCase=="reno"){

let valueToLowerCase="renoSeries"
    window.location.replace(`${valueToLowerCase}.html`);

}

else if(valueToLowerCase.include())
else if(valueToLowerCase=="a"){
    let valueToLowerCase="aseries"
        window.location.replace(`${valueToLowerCase}.html`);

    }


else{
window.location.replace(`${valueToLowerCase}.html`);
}
}

   

