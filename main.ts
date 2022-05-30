let indice = 0
let i = 5
let j = 0
let k = 4
for (let index = 0; index < 3; index++) {
    for (let index = 0; index < i; index++) {
        led.plot(indice, j)
        basic.pause(100)
        indice += 1
    }
    indice = 0
    for (let index = 0; index < i; index++) {
        led.plot(k, indice)
        basic.pause(100)
        indice += 1
    }
    indice = 4
    for (let index = 0; index < i; index++) {
        led.plot(indice, k)
        basic.pause(100)
        indice += -1
    }
    indice = 4
    for (let index = 0; index < 5; index++) {
        led.plot(j, indice)
        basic.pause(100)
        indice += -1
    }
    i += -1
    j += 1
    k += -1
}
basic.pause(1000)
basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Yes)
basic.clearScreen()
for (let index = 0; index < 3; index++) {
    basic.showString("HELLO")
}
