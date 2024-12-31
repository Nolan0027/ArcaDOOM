controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A != 1) {
        A = 1
        Switch = miniMenu.createMenu(
        miniMenu.createMenuItem("Back", assets.image`X`),
        miniMenu.createMenuItem("Hand", assets.image`Hand`),
        miniMenu.createMenuItem("Pistol", assets.image`Pistol`)
        )
        Switch.setTitle("Switch weapon")
        Switch.setFlag(SpriteFlag.RelativeToCamera, true)
        Switch.setDimensions(100, 105)
        Switch.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                Switch.close()
                A = 0
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Weapon == 0) {
        HandUI.setImage(assets.image`Hand2`)
        _2 = darts.create(assets.image`Void`, SpriteKind.Projectile, Render.getRenderSpriteInstance().x, Render.getRenderSpriteInstance().y)
        _2.throwDart()
        _2.follow(_3)
        pause(400)
        sprites.destroy(_2)
        HandUI.setImage(assets.image`Hand`)
    } else {
        if (info.life() > 5) {
            Face.setImage(assets.image`Face0`)
        } else {
            Face.setImage(assets.image`Face2`)
        }
        HandUI.setImage(assets.image`Hand_gun2`)
        _2 = darts.create(assets.image`3`, SpriteKind.Projectile, Render.getRenderSpriteInstance().x, Render.getRenderSpriteInstance().y)
        _2.throwDart()
        _2.follow(_3)
        pause(400)
        if (info.life() > 5) {
            Face.setImage(assets.image`Face`)
        } else {
            Face.setImage(assets.image`Face1`)
        }
        HandUI.setImage(assets.image`Hand_gun`)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == _2B) {
        info.changeLifeBy(-1)
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        if (info.life() > 5) {
            Face.setImage(assets.image`Face`)
        } else {
            Face.setImage(assets.image`Face1`)
        }
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
let Switch: miniMenu.MenuSprite = null
let A = 0
let HandUI: Sprite = null
let Face: Sprite = null
let _3: Sprite = null
let Weapon = 0
let _1 = Render.getRenderSpriteVariable()
Weapon = 1
_3 = sprites.create(assets.image`4`, SpriteKind.Enemy)
Face = sprites.create(assets.image`Face`, SpriteKind.Player)
HandUI = sprites.create(assets.image`Hand_gun`, SpriteKind.Player)
HandUI.setFlag(SpriteFlag.RelativeToCamera, true)
HandUI.scale = 3.4
HandUI.setPosition(81, 103)
Render.move(Render.getRenderSpriteInstance(), 100)
_1.setPosition(150, 250)
Face.setPosition(15, 99)
Face.scale = 3
_3.setPosition(180, 400)
Face.setFlag(SpriteFlag.RelativeToCamera, true)
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
game.onUpdateInterval(3000, function () {
    _2B = sprites.createProjectileFromSprite(assets.image`5`, _3, 100, 0)
    _2B.follow(_1)
})
