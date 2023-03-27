motors.motorCommand(MotorCommand.Coast)
for (let index = 0; index < 100; index++) {
    music.playMelody("G B A G C5 B A B ", 120)
    basic.showString("herr vollrath beste")
    basic.showIcon(IconNames.Heart)
    basic.setLedColor(0xffff00)
    basic.showLeds(`
        # . # . #
        . . # . .
        . # # # .
        # . . . #
        . # # # .
        `)
}
