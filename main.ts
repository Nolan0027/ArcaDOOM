namespace SpriteKind {
    export const UI = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    HandUI.setImage(assets.image`Hand_gun2`)
    _2 = darts.create(assets.image`3`, SpriteKind.Projectile, Render.getRenderSpriteInstance().x, Render.getRenderSpriteInstance().y)
    _2.follow(_3)
    pause(400)
    HandUI.setImage(assets.image`Hand_gun`)
    _2.angle = Render.getAttribute(Render.attribute.dirX)
    _2.angleRate = 0
    _2.throwDart()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == _2B) {
        info.changeLifeBy(-1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.setImage(assets.image`6`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == _2) {
        sprites.destroy(_3)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    }
})
let _2B: Sprite = null
let _2: Dart = null
let HandUI: Sprite = null
let _3: Sprite = null
let _1 = Render.getRenderSpriteVariable()
_3 = sprites.create(assets.image`4`, SpriteKind.Enemy)
HandUI = sprites.create(assets.image`Hand_gun`, SpriteKind.UI)
HandUI.setFlag(SpriteFlag.RelativeToCamera, true)
HandUI.scale = 3.4
HandUI.setPosition(81, 103)
Render.move(Render.getRenderSpriteInstance(), 100)
_1.setPosition(270, 250)
_3.setPosition(260, 390)
tiles.setCurrentTilemap(tilemap`Level`)
scene.setBackgroundImage(assets.image`Bg`)
info.setLife(10)
music.play(music.createSong(assets.song`theme1`), music.PlaybackMode.UntilDone)
music.play(music.createSong(assets.song`theme2`), music.PlaybackMode.UntilDone)
music.play(music.createSong(assets.song`Drums`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    music.play(music.createSong(assets.song`theme1`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(assets.song`theme2`), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(20000, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
})
game.onUpdateInterval(4500, function () {
    _2B = sprites.createProjectileFromSprite(assets.image`5`, _3, 100, 0)
    _2B.follow(_1)
})
