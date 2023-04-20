input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let thing: game.LedSprite = null
let sprite: game.LedSprite = null
let score = 0
sprite = game.createSprite(2, 4)
for (let index = 0; index < 4; index++) {
    basic.pause(1000)
    thing = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        if (sprite.isTouching(thing)) {
            score += 1
            thing.delete()
        } else {
            basic.pause(350)
            thing.change(LedSpriteProperty.Y, -1)
        }
        thing.delete()
    }
}
basic.clearScreen()
basic.showNumber(score)
