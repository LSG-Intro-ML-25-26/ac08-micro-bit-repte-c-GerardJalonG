input.onButtonPressed(Button.A, function () {
    radio.sendString("\"Hello World\"")
    basic.showString("Sent!")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
