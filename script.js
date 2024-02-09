
const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""
}

function calculate() {
    try {
        const expression = display.value;
        const result = eval(expression);

        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(2);
        }
    } catch (error) {
        display.value = "Error";
    }
}
