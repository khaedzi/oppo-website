var submit=document.getElementById("submit2");
var submitOne=document.getElementById("submitOne");
submit.addEventListener("submit",handle);


function handle(event) {
event.preventDefault();
let oo=event.target.koo.value;
window.location.replace(`${oo}.html`);
}

   

