let TempEx = 0
radio.setGroup(2)
basic.forever(function () {
    TempEx = input.temperature()
    TempEx = TempEx - 2
    basic.showNumber(TempEx)
    radio.sendNumber(TempEx)
})
