function masoara_distanta () {
    dist1 = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    dist2 = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    if (Math.abs(dist2 - dist1) < 10) {
        dist = dist2
    }
}
let dist = 0
let dist2 = 0
let dist1 = 0
basic.showIcon(IconNames.Tortoise)
TPBot.headlightColor(0x0000ff)
basic.forever(function () {
    dist = 100
    masoara_distanta()
    if (dist < 10) {
        TPBot.stopCar()
        for (let index = 0; index < 3; index++) {
            TPBot.headlightColor(0xff0000)
            basic.pause(500)
            TPBot.headlightColor(0xffffff)
            basic.pause(500)
        }
    } else {
        if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
            TPBot.setWheels(20, 20)
        }
        if (TPBot.trackLine(TPBot.TrackingState.L_unline_R_line)) {
            TPBot.setWheels(40, 10)
        }
        if (TPBot.trackLine(TPBot.TrackingState.L_line_R_unline)) {
            TPBot.setWheels(10, 40)
        }
        if (TPBot.trackLine(TPBot.TrackingState.L_R_unline)) {
            TPBot.setWheels(0, 0)
        }
    }
})
