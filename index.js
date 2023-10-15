const length = 3.281
const volume = 0.264
const mass = 2.204

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function() {
    renderResult()
})

function renderResult() {
  const value = inputEl.value.replace(",",".") 
  
  lengthEl.textContent = `${value} meters = ${convertToImperial(value, length).toFixed(3)} feet | ${value} feet = ${convertToMetric(value, length).toFixed(3)} meters`

  volumeEl.textContent = `${inputEl.value} liters = ${convertToImperial(value, volume).toFixed(3)} gallons | ${value} gallons = ${convertToMetric(value, volume).toFixed(3)} liters`

  massEl.textContent = `${value} kilos = ${convertToImperial(value, mass).toFixed(3)} pounds | ${inputEl.value} pounds = ${convertToMetric(value, mass).toFixed(3)} kilos`
}

function convertToMetric(number, index) {
  return number / index
}

function convertToImperial(number, index) {
  return number * index
}