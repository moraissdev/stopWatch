const startButton = document.querySelector(".start-button")
const stopButton = document.querySelector(".stop-button")
const resetButton = document.querySelector(".reset-button")
const timeInitialMiliSecond = document.querySelector(".milisecond")
const timeInitialSecond = document.querySelector(".second")
const timeInitialMinute = document.querySelector(".minute")
let stopWatch
let startNumber = 0

stopButton.style.display = "none"
resetButton.style.display = "none"

function actionStart() {
    if (stopWatch) return
    stopWatch = setInterval(function() {
        startNumber++
        timeInitialMiliSecond.innerHTML = startNumber.toString().padStart(3, "0")
    }, 10);
    stopButton.style.display = ""
    resetButton.style.display = ""
    
}

function actionStop() {
    clearInterval(stopWatch)
    stopWatch = null
}

function actionReset() {
    clearInterval(stopWatch)
    stopWatch = null
    startNumber = 0
    timeInitialMiliSecond.innerHTML = "000"
    stopButton.style.display = "none"
    resetButton.style.display = "none"
    startButton.style.backgroundColor = "#0f37ff"
}

function changeButtonStart() {
    startButton.innerHTML = "Continuar"
    startButton.style.backgroundColor = "#007f58"
}

function changeButtonContinue() {
    startButton.innerHTML = "Iniciar"
}

startButton.addEventListener("click", () => {
    actionStart()
    changeButtonStart()
})

resetButton.addEventListener("click", () => {
    actionReset()
    changeButtonContinue()
})

stopButton.addEventListener("click", () => {
    actionStop()
    changeButtonStart()
})