/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let lengthP = document.getElementById("length-p")
let volumeP = document.getElementById("volume-p")
let massP = document.getElementById("mass-p")
let inputEl = document.getElementById("input")

convertBtn.addEventListener("click", function(){
    let value = inputEl.value
    let meterVal = value * 3.281;
    let feetVal = value / 3.281;
    lengthP.innerHTML = `${value} meters = ${meterVal.toFixed(3)} feet | ${value} feet = ${feetVal.toFixed(3)} meters`
    
    let litersVal = value * 0.264;
    let gallonsVal = value / 0.264;
    volumeP.innerHTML = `${value} liters = ${litersVal.toFixed(3)} gallons | ${value} gallons = ${gallonsVal.toFixed(3)} liters`
    
    let kilogramsVal = value * 2.204;
    let poundsVal = value / 2.204;
    massP.innerHTML = `${value} kilos = ${kilogramsVal.toFixed(3)} pounds | ${value} pounds = ${poundsVal.toFixed(3)} kilos`
    
})