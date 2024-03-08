
let display= document.getElementById("display");

function numtoin(input){
  display.value += input;
}

function cleardisplay(){
  display.value ="";
}
function calculate(){
  
  try{
    display.value = eval(display.value);
  }catch(error){
    display.value = "ERROR"
  }
}
function clearnumdisplay(){
  display.value = display.value.substring(0,display.value.length - 1);
}