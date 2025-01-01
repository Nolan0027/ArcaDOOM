controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Weapon == 0) {
        HandUI.setImage(assets.image`Hand2`)
        _2 = sprites.createProjectileFromSprite(assets.image`Void`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
        pause(300)
        sprites.destroy(_2)
        HandUI.setImage(assets.image`Hand`)
    } else {
        Face.setImage(assets.image`Face01`)
        HandUI.setImage(assets.image`GunShoot`)
        _2 = sprites.createProjectileFromSprite(assets.image`3`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
        pause(400)
        HandUI.setImage(assets.image`HandPistol`)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == _2B) {
        info.changeLifeBy(-19)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.setImage(assets.image`6`)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A != 1) {
        A = 1
        Switch = miniMenu.createMenu(
        miniMenu.createMenuItem("Back", assets.image`X`),
        miniMenu.createMenuItem("Hand", assets.image`Hand`),
        miniMenu.createMenuItem("Pistol", assets.image`PistolItem`)
        )
        Switch.setTitle("Switch weapon")
        Switch.setFlag(SpriteFlag.RelativeToCamera, true)
        Switch.setDimensions(100, 105)
        Switch.setPosition(85, 94)
        Switch.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                Weapon = 0
                HandUI.setImage(assets.image`Hand`)
                Switch.close()
                A = 0
            } else if (selectedIndex == 1) {
                Weapon = 0
            } else if (selectedIndex == 2) {
                Weapon = 1
                HandUI.setImage(assets.image`Hand_gun`)
                Switch.close()
                A = 0
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == _2) {
        sprites.destroy(_3)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (info.life() + 20 > 100) {
        info.changeLifeBy(30)
        sprites.destroy(otherSprite)
    }
})
let Switch: miniMenu.MenuSprite = null
let A = 0
let _2B: Sprite = null
let _2: Sprite = null
let HandUI: Sprite = null
let Face: Sprite = null
let _3: Sprite = null
let Weapon = 0
Weapon = 1
let _1 = sprites.create(assets.image`Player`, SpriteKind.Player)
_3 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
Face = sprites.create(assets.image`Face01`, SpriteKind.Player)
HandUI = sprites.create(assets.image`HandPistol`, SpriteKind.Player)
let Medkit = sprites.create(assets.image`Medkit`, SpriteKind.Food)
let UI = sprites.create(assets.image`UI`, SpriteKind.Player)
let PistolItem = sprites.create(assets.image`PistolItem`, SpriteKind.Player)
let GunShoot = sprites.create(assets.image`GunShoot`, SpriteKind.Player)
_1 = Render.getRenderSpriteVariable()
HandUI.setFlag(SpriteFlag.RelativeToCamera, true)
UI.setFlag(SpriteFlag.RelativeToCamera, true)
HandUI.scale = 1.2
HandUI.setPosition(135, 97)
UI.setPosition(68, 110)
UI.scale = 0.35
Render.move(Render.getRenderSpriteInstance(), 100)
info.setLife(100)
_1.setPosition(150, 250)
Face.setPosition(68, 110)
Face.scale = 0.6
_3.setPosition(180, 400)
_3.scale = 0.3
Medkit.setPosition(200, 420)
Medkit.scale = 0.6
Face.setFlag(SpriteFlag.RelativeToCamera, true)
let HealthText = textsprite.create(convertToText(info.life()))
HealthText.setOutline(2, 2)
HealthText.setPosition(92, 107)
HealthText.z = 999
HealthText.scale = 1.2
HealthText.setFlag(SpriteFlag.RelativeToCamera, true)
tiles.setCurrentTilemap(tilemap`Level`)
scene.setBackgroundImage(assets.image`Bg`)
music.play(music.createSong(assets.song`theme1`), music.PlaybackMode.UntilDone)
music.play(music.createSong(assets.song`theme2`), music.PlaybackMode.UntilDone)
music.play(music.createSong(assets.song`Drums`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    music.play(music.createSong(assets.song`theme1`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(assets.song`theme2`), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(3000, function () {
    _2B = sprites.createProjectileFromSprite(assets.image`5`, _3, 100, 0)
    _2B.follow(_1)
})
