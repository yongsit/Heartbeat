bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteValue("x", input.lightLevel())
})
