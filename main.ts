basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            if ((X + Y) % 2 == 0) {
                led.plot(X, Y)
            } else {
                led.unplot(X, Y)
            }
        }
    }
})
