let allInput = document.querySelectorAll(".number")
let btn = document.querySelectorAll(".key")
let result = document.querySelector(".result")
// input button put the value in input box//
let selectedInput = null;
document.getElementById('Input1').addEventListener('click', function(){
    selectedInput = document.getElementById('Input1');
});
document.getElementById('Input2').addEventListener('click', function(){
    selectedInput = document.getElementById('Input2');
});
const buttons = document.querySelectorAll(".key");
buttons.forEach(button =>{
    button.addEventListener('click',function(){
        if(selectedInput){
            selectedInput.value += button.value;
        }
    });
});
// =,-,*,/ rule //
btn[3].addEventListener("click",() => {
    let input1value =Number (allInput [0].value);
    let input2value =Number (allInput [1].value);
    let output = input1value + input2value;
    result.value = output;
    allInput[0].value = ' '
    allInput[1].value = ' '
});
btn[7].addEventListener("click",() => {
    let input1value =Number (allInput [0].value);
    let input2value =Number (allInput [1].value);
    let output = input1value - input2value;
    result.value = output;
    allInput[0].value = ' '
    allInput[1].value = ' '
});
btn[11].addEventListener("click",() => {
    let input1value =Number (allInput [0].value);
    let input2value =Number (allInput [1].value);
    let output = input1value * input2value;
    result.value = output;
    allInput[0].value = ' '
    allInput[1].value = ' '
});
btn[15].addEventListener("click",() => {
    let input1value =Number (allInput [0].value);
    let input2value =Number (allInput [1].value);
    let output = input1value / input2value;
    result.value = output;
    allInput[0].value = ' '
    allInput[1].value = ' '
});