controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0) {
        if (Weapon == 1) {
            HandUI.setImage(assets.image`PistolShoot`)
            _2 = sprites.createProjectileFromSprite(assets.image`3`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
            pause(400)
            HandUI.setImage(assets.image`HandPistol`)
        } else {
            HandUI.setImage(assets.image`Punch`)
            _2 = sprites.createProjectileFromSprite(assets.image`PunchEffect`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
            pause(300)
            sprites.destroy(_2)
            HandUI.setImage(assets.image`HandIdle`)
        }
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
        miniMenu.createMenuItem("1", assets.image`HandIdle`),
        miniMenu.createMenuItem("2", assets.image`Pistol`)
        )
        Switch.setTitle("Switch weapon")
        Switch.setFlag(SpriteFlag.RelativeToCamera, true)
        Switch.setDimensions(100, 105)
        Switch.setPosition(85, 94)
        Switch.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                Switch.close()
            } else if (selectedIndex == 1) {
                Weapon = 0
                HandUI.setImage(assets.image`HandIdle`)
                Switch.close()
                A = 0
            } else if (selectedIndex == 2) {
                Weapon = 1
                HandUI.setImage(assets.image`HandPistol`)
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
let _2B: Sprite = null
let _2: Sprite = null
let Health: TextSprite = null
let _3: Sprite = null
let Face: Sprite = null
let UI: Sprite = null
let Medkit: Sprite = null
let HandUI: Sprite = null
let _1: Sprite = null
let Weapon = 0
let Menu2: miniMenu.MenuSprite = null
let A = 0
A = 1
Render.setViewMode(ViewMode.tilemapView)
scene.setBackgroundImage(assets.image`Bg`)
tiles.setCurrentTilemap(tilemap`Void`)
let Menu = miniMenu.createMenu(
miniMenu.createMenuItem("Single Player"),
miniMenu.createMenuItem("Options")
)
Menu.setTitle("Main menu")
Menu.setDimensions(100, 100)
Menu.setPosition(82, 95)
Menu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    if (selectedIndex == 0) {
        Menu.close()
        Menu2 = miniMenu.createMenu(
        miniMenu.createMenuItem("I'm Too Young to Die"),
        miniMenu.createMenuItem("Hurt Me Plenty"),
        miniMenu.createMenuItem("Nightmare")
        )
        Menu2.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selectedIndex == 0) {
                Menu2.close()
                Render.setViewMode(ViewMode.raycastingView)
                Weapon = 1
                _1 = Render.getRenderSpriteInstance()
                HandUI = sprites.create(assets.image`HandPistol`, SpriteKind.Player)
                Medkit = sprites.create(assets.image`Medkit`, SpriteKind.Food)
                UI = sprites.create(assets.image`UIbar`, SpriteKind.Player)
                Face = sprites.create(assets.image`Face`, SpriteKind.Player)
                _3 = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
                A = 0
                scene.setBackgroundImage(assets.image`Bg`)
                tiles.setCurrentTilemap(tilemap`Level`)
                HandUI.setFlag(SpriteFlag.RelativeToCamera, true)
                UI.setFlag(SpriteFlag.RelativeToCamera, true)
                HandUI.scale = 1.2
                HandUI.setPosition(135, 97)
                UI.setPosition(67, 110)
                UI.scale = 1.5
                Render.move(Render.getRenderSpriteInstance(), 100)
                info.setLife(100)
                Render.getRenderSpriteInstance().setPosition(15, 4)
                Face.setPosition(68, 110)
                Face.scale = 0.6
                _3.setPosition(180, 400)
                _3.scale = 0.3
                Medkit.setPosition(200, 420)
                Medkit.scale = 0.6
                Face.setFlag(SpriteFlag.RelativeToCamera, true)
                Health = textsprite.create(convertToText(info.life()))
                Health.setOutline(1, 2)
                Health.setPosition(34, 111)
                Health.scale = 1.2
                Health.setFlag(SpriteFlag.RelativeToCamera, true)
                music.play(music.createSong(assets.song`Drums`), music.PlaybackMode.LoopingInBackground)
            }
        })
    }
})
forever(function () {
    music.play(music.createSong(assets.song`theme1`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(assets.song`theme2`), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(3000, function () {
    if (A == 0) {
        _2B = sprites.createProjectileFromSprite(assets.image`5`, _3, 100, 0)
        _2B.follow(_1)
    }
})
