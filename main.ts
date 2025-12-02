radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > NumLocal) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber == NumLocal) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    NumLocal = randint(1, 6)
    basic.showNumber(NumLocal)
    radio.sendNumber(NumLocal)
})
let NumLocal = 0
radio.setGroup(1)
NumLocal = 0
