const output = document.getElementById("output");

function display(arg){
    output.value += arg;
}
function allClear(){
    output.value = '';
}
function del(){
    output.value = output.value.slice(0,-1);
}
function calculate(){
    output.value = eval(output.value);
}








