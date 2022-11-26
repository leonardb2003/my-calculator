const output = document.getElementById("output");
let deci = true;

function display(arg){
    output.value = output.value + arg;
}
function displayOpp(arg){
    output.value = output.value + arg;
    deci = true;
}
function dot(arg) {
    if(deci === true){
        output.value = output.value + arg;
        deci = false;
    }
}
function allClear(){
    output.value = '';
    deci = true;
}
function del(){
    output.value = output.value.slice(0,-1);

}
function calculate(){
    output.value = eval(output.value);
    deci = true;
    
}








