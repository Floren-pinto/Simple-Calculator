const display = document.getElementById("input-fill");

function appendToDisplay(value){
    if(display.value === "Error"){
        display.value = "";
    }
    display.value += value;
}

function calculate(){
    try{
        display.value = display.value.replace(/(\d+(\.\d+)?)%/g, (match, number) => `${number} * 0.01`);
        display.value = eval(display.value);
    }catch (error){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}