radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        BitRacer.motorRun(BitRacer.Motors.All, 0)
    }
    if (receivedNumber == 1) {
        BitRacer.motorRun(BitRacer.Motors.All, 300)
    }
    if (receivedNumber == 2) {
        BitRacer.motorRun(BitRacer.Motors.All, -300)
    }
    if (receivedNumber == 3) {
        BitRacer.motorRun(BitRacer.Motors.M_R, 300)
        BitRacer.motorRun(BitRacer.Motors.M_L, -300)
    }
    if (receivedNumber == 4) {
        BitRacer.motorRun(BitRacer.Motors.M_R, -300)
        BitRacer.motorRun(BitRacer.Motors.M_L, 300)
    }
})
radio.setGroup(255)
