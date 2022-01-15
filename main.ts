let dist = 0
basic.showIcon(IconNames.Tortoise)
TPBot.headlightColor(0x0000ff)
basic.forever(function () {
    dist = TPBot.sonarReturn(TPBot.SonarUnit.Centimeters)
    if (dist >= 3 && dist <= 7) {
        TPBot.stopCar()
        for (let index = 0; index < 3; index++) {
            TPBot.headlightColor(0xff0000)
            basic.pause(200)
            music.playTone(262, music.beat(BeatFraction.Half))
            TPBot.headlightColor(0xffffff)
            basic.pause(200)
        }
    } else {
        TPBot.headlightColor(0x0000ff)
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
