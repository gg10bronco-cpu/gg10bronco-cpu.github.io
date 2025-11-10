const alertMe = document.getElementById("entrybutton");
const input = document.getElementById("entryinput");
const output = document.getElementById("textoutput");
var value;

function init(){
  alertMe.addEventListener("click", function() {
    value = input.value;
    output.textContent = value;
    alert("Gilberto: " + value);
  });
}

window.addEventListener('load', init);
