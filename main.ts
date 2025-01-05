controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0) {
        if (_1.tileKindAt(TileDirection.Left, assets.tile`Door2`) || (_1.tileKindAt(TileDirection.Top, assets.tile`Door2`) || (_1.tileKindAt(TileDirection.Right, assets.tile`Door2`) || _1.tileKindAt(TileDirection.Bottom, assets.tile`Door2`)))) {
            if (Level == 0) {
                Level = 1
                ArmorItem = sprites.create(assets.image`Armor2`, SpriteKind.Food)
                ArmorItem.setPosition(45, 269)
                ArmorItem.scale = 0.6
                tiles.setCurrentTilemap(tilemap`Hangar2`)
                Render.setCeilingTilemap(tilemap`Hangar2Ceil`)
                En.setPosition(51, 269)
                Render.getRenderSpriteInstance().setPosition(60, 300)
                Render.setViewAngleInDegree(260)
            }
        } else {
            A = 1
            Switch = miniMenu.createMenu(
            miniMenu.createMenuItem("Back"),
            miniMenu.createMenuItem("1", assets.image`Hand`),
            miniMenu.createMenuItem("2", assets.image`Pistol`)
            )
            Switch.setTitle("Switch weapon")
            Switch.setFlag(SpriteFlag.RelativeToCamera, true)
            Switch.setDimensions(100, 105)
            Switch.setPosition(81, 86)
            Switch.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                	
                } else if (selectedIndex == 1) {
                    B = 0
                    HandUI.setImage(assets.image`Hand`)
                } else if (selectedIndex == 2) {
                    B = 1
                    HandUI.setImage(assets.image`HandPistol`)
                }
                Switch.close()
                A = 0
            })
        }
    }
})
function Start (N: number) {
    Menu2.close()
    Render.setViewMode(ViewMode.raycastingView)
    B = 1
    _1 = Render.getRenderSpriteInstance()
    Crosshair = sprites.create(assets.image`Crosshair`, SpriteKind.Player)
    HandUI = sprites.create(assets.image`HandPistol`, SpriteKind.Player)
    Medkit = sprites.create(assets.image`Medkit`, SpriteKind.Food)
    UI = sprites.create(assets.image`UIbar`, SpriteKind.Player)
    Face = sprites.create(assets.image`Face`, SpriteKind.Player)
    En = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
    Crosshair.setFlag(SpriteFlag.RelativeToCamera, true)
    Crosshair.setPosition(79, 62)
    tiles.setCurrentTilemap(tilemap`Hangar`)
    Render.setCeilingTilemap(tilemap`HangarCeil`)
    ArmorItem = sprites.create(assets.image`Armor`, SpriteKind.Food)
    ArmorItem.setPosition(26, 72)
    ArmorItem.scale = 0.8
    HandUI.setFlag(SpriteFlag.RelativeToCamera, true)
    UI.setFlag(SpriteFlag.RelativeToCamera, true)
    HandUI.scale = 1.2
    HandUI.setPosition(135, 101)
    UI.setPosition(81, 109)
    UI.scale = 1.5
    Render.move(Render.getRenderSpriteInstance(), 230)
    info.setScore(0)
    if (N == 1) {
        info.setLife(100)
    } else if (N == 2) {
        info.setLife(75)
    } else {
        info.setLife(45)
    }
    Render.getRenderSpriteInstance().setPosition(248, 45)
    Face.setPosition(80, 110)
    Face.scale = 0.6
    En.setPosition(180, 400)
    En.scale = 0.3
    Medkit.setPosition(200, 420)
    Medkit.scale = 0.6
    Face.setFlag(SpriteFlag.RelativeToCamera, true)
    RenderStats()
    music.play(music.createSong(assets.song`Drums`), music.PlaybackMode.LoopingInBackground)
    A = 0
    Render.setViewAngleInDegree(90)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (A == 0) {
        if (B == 1) {
            HandUI.setImage(assets.image`PistolShoot`)
            music.play(music.createSoundEffect(WaveShape.Noise, 1072, 359, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            _2 = sprites.createProjectileFromSprite(assets.image`3`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
            pause(400)
            HandUI.setImage(assets.image`HandPistol`)
        } else {
            HandUI.setImage(assets.image`Punch`)
            _2 = sprites.createProjectileFromSprite(assets.image`PunchEffect`, Render.getRenderSpriteInstance(), Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
            pause(300)
            sprites.destroy(_2)
            HandUI.setImage(assets.image`Hand`)
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == EnemyProj) {
        if (Armor == 0) {
            info.changeLifeBy(-19)
        } else if (Armor == 5) {
            info.changeLifeBy(-17)
        } else if (Armor == 10) {
            info.changeLifeBy(-14)
        } else if (Armor == 15) {
            info.changeLifeBy(-11)
        } else if (Armor == 20) {
            info.changeLifeBy(-8)
        } else if (Armor > 25) {
            info.changeLifeBy(-7)
        }
        sprites.destroy(otherSprite)
        RenderStats()
    }
})
function RenderStats () {
    sprites.destroy(Health)
    sprites.destroy(ArmorText)
    Health = textsprite.create(convertToText(info.life()))
    ArmorText = textsprite.create(convertToText(Armor))
    Health.setFlag(SpriteFlag.RelativeToCamera, true)
    ArmorText.setFlag(SpriteFlag.RelativeToCamera, true)
    Health.setOutline(1, 2)
    ArmorText.setOutline(1, 2)
    Health.setPosition(44, 110)
    ArmorText.setPosition(94, 110)
    Health.scale = 1.2
    ArmorText.scale = 1.2
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == _2) {
        otherSprite.setImage(assets.image`Dead`)
        info.changeScoreBy(5)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (otherSprite == ArmorItem) {
        Armor += 5
    } else {
        if (info.life() + 20 > 100) {
            info.changeLifeBy(30)
        }
    }
    sprites.destroy(otherSprite)
    RenderStats()
})
let ArmorText: TextSprite = null
let Health: TextSprite = null
let Armor = 0
let EnemyProj: Sprite = null
let _2: Sprite = null
let Face: Sprite = null
let UI: Sprite = null
let Medkit: Sprite = null
let Crosshair: Sprite = null
let HandUI: Sprite = null
let B = 0
let Switch: miniMenu.MenuSprite = null
let En: Sprite = null
let ArmorItem: Sprite = null
let _1: Sprite = null
let Menu2: miniMenu.MenuSprite = null
let Level = 0
let A = 0
A = 1
Level = 0
Render.setViewMode(ViewMode.tilemapView)
tiles.setCurrentTilemap(tilemap`Void`)
let Menu = miniMenu.createMenu(
miniMenu.createMenuItem("Single Player"),
miniMenu.createMenuItem("2-player")
)
Render.getRenderSpriteInstance().x = 200
Menu.setTitle("Main menu")
Menu.setDimensions(100, 100)
Menu.setPosition(81, 95)
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
                Start(1)
            } else if (selectedIndex == 1) {
                Start(2)
            } else if (selectedIndex == 2) {
                Start(3)
            }
        })
    }
})
forever(function () {
    music.play(music.createSong(assets.song`theme1`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(assets.song`theme2`), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(2300, function () {
    if (A == 0) {
        EnemyProj = sprites.createProjectileFromSprite(assets.image`5`, En, 100, 0)
        EnemyProj.follow(Render.getRenderSpriteInstance())
    }
})
