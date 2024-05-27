input.onButtonPressed(Button.A, function () {
    temp += 10
    basic.showString("" + (temp))
})
input.onGesture(Gesture.ScreenUp, function () {
    light2 += input.lightLevel() + 10
})
input.onGesture(Gesture.ScreenDown, function () {
    light2 += input.lightLevel() + 10
})
input.onButtonPressed(Button.B, function () {
    temp += -10
    basic.showString("" + (temp))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Light")
    basic.showString("" + (light2))
    basic.pause(200)
    basic.clearScreen()
    basic.showString("Temp")
    basic.showString("" + (temp))
})
let temp = 0
let light2 = 0
light2 = input.lightLevel()
temp = input.temperature()
