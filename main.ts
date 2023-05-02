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
sprite.set(LedSpriteProperty.Brightness, 169)
for (let index = 0; index < 4; index++) {
    basic.pause(500)
    thing = game.createSprite(randint(0, 4), 0)
    thing.set(LedSpriteProperty.Brightness, randint(69, 255))
    for (let index = 0; index < 4; index++) {
        if (thing.isTouching(sprite)) {
            thing.delete()
            score += 1
        } else {
            basic.pause(350)
            thing.change(LedSpriteProperty.Y, -1)
        }
    }
}
basic.clearScreen()
basic.showNumber(score)
