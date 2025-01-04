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
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Void":
            case "level3":return tiles.createTilemap(hex`0100010000`, img`
. 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Hangar":
            case "level1":return tiles.createTilemap(hex`15000f00000000000000000000000101010101020101010000000000000000000000010000000000000000000100000000000001010101000000000300000003000001000401010500000001000000000000000000000006040000000000000000000000000000000000000001000401010500000001000000000000000000000006000000000001010101000000000300000003000001000000000000000001000000000000000000000100000000000000000000010101000001010101010000000000000000000000000001000001000000000000000000000000000000000001000001000000000000000000000000000000000001000000010000000000000000000000000000000000010000010000000000000000000000000000000000010000010000000000000000000000000000000000000707000000000000`, img`
..........222222222..
.........2.........2.
.....2222....2...2..2
.2222...2...........2
2...................2
.2222...2...........2
.....2222....2...2..2
........2..........2.
.........222..22222..
...........2..2......
...........2..2......
...........2...2.....
............2..2.....
............2..2.....
.............22......
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,myTiles.tile3,myTiles.tile2,myTiles.tile6,myTiles.tile7,myTiles.tile11], TileScale.Sixteen);
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
            case "RustWindow2":
            case "tile7":return tile7;
            case "ZuliWall":
            case "tile8":return tile8;
            case "Wires2":
            case "tile5":return tile5;
            case "Wires3":
            case "tile9":return tile9;
            case "WiresAcid":
            case "tile10":return tile10;
            case "Rust2":
            case "tile3":return tile3;
            case "Door2":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
