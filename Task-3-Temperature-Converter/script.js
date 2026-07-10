function convertTemperature() {

    let temperature = parseFloat(document.getElementById("temperature").value);

    let fromUnit = document.getElementById("fromUnit").value;

    let toUnit = document.getElementById("toUnit").value;

    let result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.innerHTML = "⚠ Please enter a valid temperature.";
        return;
    }

    let convertedTemp;

    // Same Unit
    if (fromUnit === toUnit) {
        convertedTemp = temperature;
    }

    // Celsius
    else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        convertedTemp = (temperature * 9 / 5) + 32;
    }

    else if (fromUnit === "celsius" && toUnit === "kelvin") {
        convertedTemp = temperature + 273.15;
    }

    // Fahrenheit
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        convertedTemp = (temperature - 32) * 5 / 9;
    }

    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        convertedTemp = (temperature - 32) * 5 / 9 + 273.15;
    }

    // Kelvin
    else if (fromUnit === "kelvin" && toUnit === "celsius") {
        convertedTemp = temperature - 273.15;
    }

    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        convertedTemp = (temperature - 273.15) * 9 / 5 + 32;
    }

    result.innerHTML =
`Converted Temperature : <br><br>
<b>${convertedTemp.toFixed(2)} °${toUnit.charAt(0).toUpperCase()}</b>`;

}
function swapUnits(){

    let from = document.getElementById("fromUnit");
    let to = document.getElementById("toUnit");

    let temp = from.value;

    from.value = to.value;

    to.value = temp;

}
document.getElementById("temperature").addEventListener("keypress",function(e){

    if(e.key==="Enter"){
        convertTemperature();
    }

});