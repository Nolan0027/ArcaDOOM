// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Void":
            case "level3":return tiles.createTilemap(hex`0100010000`, img`
. 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Hangar":
            case "level1":return tiles.createTilemap(hex`15000f00000000000000000000000202020202020202020000000000000000000000020000000000000000000200000000000002020202000000000100000001000002000202020203000002000000000000000000000002020000000000000000000000000000000000000002000202020203000002000000000000000000000002000000000002020202000000000100000001000002000000000000000002000000000000000000000200000000000000000002020202000002020202020000000000000000000000000002000002000000000000000000000000000000000002000002000000000000000000000000000000000002000000020000000000000000000000000000000000020000020000000000000000000000000000000000020000020000000000000000000000000000000000000404000000000000`, img`
..........222222222..
.........2.........2.
.....2222....2...2..2
.2222...2...........2
2...................2
.2222...2...........2
.....2222....2...2..2
........2..........2.
........2222..22222..
...........2..2......
...........2..2......
...........2...2.....
............2..2.....
............2..2.....
.............22......
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile1,myTiles.tile6,myTiles.tile11], TileScale.Sixteen);
            case "HangarCeil":
            case "Hangar1":return tiles.createTilemap(hex`15000f00000000000000000000000000000000000000000000000000000000000000000101010101010101010000000000000000000000010101010002020200010100000000000003030300010101010202020202010100000303030303030303010101010202020202010100000000000003030300010101010202020202010100000000000000000000010101010002020200010100000000000000000000010101010101010101010000000000000000000000000000010100000000000000000000000000000000000000010100000000000000000000000000000000000000010100000000000000000000000000000000000000010101000000000000000000000000000000000000000101000000000000000000000000000000000000000404000000000000000000000000000000000000000000000000000000`, img`
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
.....................
`, [myTiles.transparency16,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15], TileScale.Sixteen);
            case "Hangar2Ceil":
            case "Hangar3":return tiles.createTilemap(hex`09001500000000000000000000000000000000010000000000000000010000000000000000010000000000000001010000000000000001010000000000000000010100000000000000010100000000000000010100000000000000010100000000000001010000000000000101000000000000000100000000000000000100000000000101010101000000000100000001000000000100010001000000000101010101000000000101010101000000000001010000000000000000000000000000`, img`
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
. . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile12], TileScale.Sixteen);
            case "Hangar2":
            case "level4":return tiles.createTilemap(hex`09001500000000000000070000000000000005000500000000000005000500000000000005000500000000000600000600000000000600000600000000000006000006000000000006000006000000000005000005000000000005000005000000000200000500000000020000020000000000020002000000000202020002000000030000000000030000030004040400030000030004000400030000030000000000030000030000000000030000000200000203000000000001010000000000`, img`
. . . . . . 2 . . 
. . . . . 2 . 2 . 
. . . . . 2 . 2 . 
. . . . . 2 . 2 . 
. . . . 2 . . 2 . 
. . . . 2 . . 2 . 
. . . . . 2 . . 2 
. . . . . 2 . . 2 
. . . . . 2 . . 2 
. . . . . 2 . . 2 
. . . . 2 . . 2 . 
. . . 2 . . 2 . . 
. . . 2 . 2 . . . 
. 2 2 2 . 2 . . . 
2 . . . . . 2 . . 
2 . 2 2 2 . 2 . . 
2 . 2 . 2 . 2 . . 
2 . . . . . 2 . . 
2 . . . . . 2 . . 
. 2 . . 2 2 . . . 
. . 2 2 . . . . . 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile1,myTiles.tile5,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Door":
            case "tile4":return tile4;
            case "Rust":
            case "tile1":return tile1;
            case "RustWindow":
            case "tile2":return tile2;
            case "Wires":
            case "tile6":return tile6;
            case "ZuliWall":
            case "tile8":return tile8;
            case "Wires2":
            case "tile5":return tile5;
            case "Wires3":
            case "tile9":return tile9;
            case "Rust2":
            case "tile3":return tile3;
            case "Door2":
            case "tile11":return tile11;
            case "Bricks":
            case "tile12":return tile12;
            case "Bricks2":
            case "tile13":return tile13;
            case "Bricks3":
            case "tile14":return tile14;
            case "Light":
            case "tile15":return tile15;
            case "WiresAcid":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
