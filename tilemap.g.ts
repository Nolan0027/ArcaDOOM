// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level":
            case "Level1":return tiles.createTilemap(hex`14001d0000000000000000010100000000000000000000000000000000000100000100000000000000000000000000000001000000000100000000000000000000000000000100000000010000000000000000000000000001000000000001000000000000000000000000010000000000000101010101010100000000000001000000000000000000000000000100000000000001000000050505050001010000030300000000000001000005000005000103000000000300000000000100000500000500010300050500030000000000000101010606010100030005050003000000000000010000000000010003000505000300000000000001000000000001000300000000030000000000000100000000000100030000000003000000000202010000000000010001000000030000000002000000000000000001000100000100000000020000000000000000000101000000010000000002000002010000000001000100000001000000000200000201000000000100010000010000000000020000020100000000010001000000010000000000020000020106060600000400000001000000000002000000000100000004040000000400000000000002000000010000040000000000040000000202000001000001000004000004040400000002000002000100000100040000040000000000000200000001010000010100000000040000000000020000000000000000000000000000040000000002000002020202020104040404040400000000000002020000000000000000000000000000000000`, img`
.......22...........
......2..2..........
.....2....2.........
.....2....2.........
....2.....2.........
...2......2222222...
...2.............2..
....2...2222.22..22.
.....2..2..2.22....2
.....2..2..2.22.22.2
......2222222.2.22.2
......2.....2.2.22.2
......2.....2.2....2
......2.....2.2....2
....222.....2.2...2.
...2........2.2..2..
..2.........22...2..
..2..22....2.2...2..
..2..22....2.2..2...
..2..22....2.2...2..
...2..22222..2...2..
...2....2...22...2..
....2...2..2.....2..
.22..2..2..2..222...
2..2.2..2.2..2......
2...22..22....2.....
2..............2....
2..222222222222.....
.22.................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile4,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "RustB":
            case "tile5":return tile5;
            case "Water0":
            case "tile7":return tile7;
            case "Acid":
            case "tile6":return tile6;
            case "Rust":
            case "tile1":return tile1;
            case "White":
            case "tile4":return tile4;
            case "RustW":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
