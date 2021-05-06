basic.showIcon(IconNames.Tortoise)
TPBot.headlightColor(0x0000ff)
basic.forever(function () {
    if (TPBot.trackLine(TPBot.TrackingState.L_R_line)) {
        TPBot.setWheels(30, 30)
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
})
