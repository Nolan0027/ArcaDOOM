controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _2 = sprites.createProjectileFromSprite(assets.image`3`, _1, 100, 0)
    _2.follow(_3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == _2B) {
        info.changeLifeBy(-1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == _2) {
        sprites.destroy(_3)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    }
})
let _2B: Sprite = null
let _3: Sprite = null
let _2: Sprite = null
let _1: Sprite = null
_1 = Render.getRenderSpriteVariable()
_3 = sprites.create(assets.image`4`, SpriteKind.Enemy)
Render.move(Render.getRenderSpriteInstance(), 100)
_1.setPosition(270, 250)
_3.setPosition(260, 390)
tiles.setCurrentTilemap(tilemap`Level`)
info.setLife(10)
forever(function () {
    pause(6000)
    _2B = sprites.createProjectileFromSprite(assets.image`5`, _3, 100, 0)
    _2B.follow(_1)
})
