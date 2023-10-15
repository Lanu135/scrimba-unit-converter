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
  lengthEl.textContent = `${inputEl.value} meters = ${convertToImperial(inputEl.value, length).toFixed(3)} feet | ${inputEl.value} feet = ${convertToMetric(inputEl.value, length).toFixed(3)} meters`

  volumeEl.textContent = `${inputEl.value} liters = ${convertToImperial(inputEl.value, volume).toFixed(3)} gallons | ${inputEl.value} gallons = ${convertToMetric(inputEl.value, volume).toFixed(3)} liters`
  
  massEl.textContent = `${inputEl.value} kilos = ${convertToImperial(inputEl.value, mass).toFixed(3)} pounds | ${inputEl.value} pounds = ${convertToMetric(inputEl.value, mass).toFixed(3)} kilos`
}

function convertToMetric(number, index) {
  return number / index
}

function convertToImperial(number, index) {
  return number * index
}