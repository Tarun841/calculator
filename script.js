const display = document.getElementById("display");

function appendtodisplay(content){
    display.value += content;
}
// appendtodisplay(con);
function cleardisplay(){
    display.value = ""
}
function calculate(){
    display.value = eval(display.value);
}