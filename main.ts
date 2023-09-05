JSON
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    led.setBrightness(255)
})

