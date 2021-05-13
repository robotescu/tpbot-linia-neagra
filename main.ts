function masoara_distanta () {
    dist = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
}
let dist = 0
basic.showIcon(IconNames.Tortoise)
TPBot.headlightColor(0x0000ff)
basic.forever(function () {
    masoara_distanta()
    if (dist < 10) {
        TPBot.stopCar()
        for (let index = 0; index < 2; index++) {
            TPBot.headlightColor(0xff0000)
            basic.pause(500)
            TPBot.headlightColor(0xffffff)
            basic.pause(500)
        }
        TPBot.headlightColor(0x0000ff)
    } else {
        if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
            TPBot.setWheels(20, 20)
        }
        if (TPBot.trackLine(TPBot.TrackingState.L_unline_R_line)) {
            TPBot.setWheels(30, 10)
        }
        if (TPBot.trackLine(TPBot.TrackingState.L_line_R_unline)) {
            TPBot.setWheels(10, 30)
        }
        if (TPBot.trackLine(TPBot.TrackingState.L_R_unline)) {
            TPBot.setWheels(0, 0)
        }
    }
})
