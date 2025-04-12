const startButton = document.querySelector(".start-button")
const contButton = document.querySelector(".continue-button")
const stopButton = document.querySelector(".stop-button")
const resetButton = document.querySelector(".reset-button")
const timeInitialMiliSecond = document.querySelector(".milisecond")
const timeInitialSecond = document.querySelector(".second")
const timeInitialMinute = document.querySelector(".minute")
let stopWatch
let startNumberMiliSecond = 0
let startNumberSecond = 0
let startNumberMinute = 0

stopButton.style.display = "none"
resetButton.style.display = "none"
contButton.style.display = "none"

function actionStart() {
    if (stopWatch) return
    stopWatch = setInterval(function() {
        startNumberMiliSecond++
        timeInitialMiliSecond.innerHTML = startNumberMiliSecond.toString().padStart(3, "0")
    }, 10);
    stopButton.style.display = ""
    resetButton.style.display = ""
    contButton.style.display = "none"
    startButton.style.display = "none"
    
}

function actionContinue() {
    stopWatch = setInterval(function() {
        startNumberMiliSecond++
        timeInitialMiliSecond.innerHTML = startNumberMiliSecond.toString().padStart(3, "0")
    }, 10);
    stopButton.style.display = ""
    contButton.style.display = "none"
}

function actionStop() {
    clearInterval(stopWatch)
    stopWatch = null
    stopButton.style.display = "none"
    contButton.style.display = ""
}

function actionReset() {
    clearInterval(stopWatch)
    stopWatch = null
    startNumberMiliSecond = 0
    timeInitialMiliSecond.innerHTML = "000"
    stopButton.style.display = "none"
    resetButton.style.display = "none"
    contButton.style.display = "none"
    startButton.style.display = ""
}

startButton.addEventListener("click", () => {
    actionStart()
})

resetButton.addEventListener("click", () => {
    actionReset()
})

stopButton.addEventListener("click", () => {
    actionStop()
})

contButton.addEventListener("click", () => {
    actionContinue()
})