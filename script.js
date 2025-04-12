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
    stopWatch = setInterval(updateStopWatch, 10)

    stopButton.style.display = ""
    resetButton.style.display = ""
    contButton.style.display = "none"
    startButton.style.display = "none"
    
}

function actionContinue() {
    stopWatch = setInterval(updateStopWatch, 10)
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
    startNumberSecond = 0
    startNumberMinute = 0
    timeInitialMiliSecond.innerHTML = "000"
    timeInitialSecond.innerHTML = "00"
    timeInitialMinute.innerHTML = "00"
    stopButton.style.display = "none"
    resetButton.style.display = "none"
    contButton.style.display = "none"
    startButton.style.display = ""
}

function updateStopWatch() {
    startNumberMiliSecond += 10

    if (startNumberMiliSecond >= 1000) {
        startNumberSecond++
        startNumberMiliSecond = 0
    }

    if (startNumberSecond >= 60) {
        startNumberMinute++
        startNumberSecond = 0
        startNumberMiliSecond = 0
    }

    timeInitialMiliSecond.innerHTML = startNumberMiliSecond.toString().padStart(3, "0")
    timeInitialSecond.innerHTML = startNumberSecond.toString().padStart(2, "0")
    timeInitialMinute.innerHTML = startNumberMinute.toString().padStart(2, "0")    
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