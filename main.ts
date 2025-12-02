radio.onReceivedNumber(function (receivedNumber) {
    if (numLocal < receivedNumber) {
        basic.showIcon(IconNames.Sad)
    } else if (numLocal == receivedNumber) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    numLocal = randint(1, 6)
    basic.showNumber(numLocal)
    radio.sendNumber(numLocal)
})
let numLocal = 0
radio.setGroup(1)
