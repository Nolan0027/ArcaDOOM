// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level":
            case "Level1":return tiles.createTilemap(hex`1e001e00000000000000000000000000000100000100000000000000000000000000000000000000000000000000000100000100000000000000000000000000000000000000000000000000010000000001000000000000000000000000000000000000000000000000010000000001000000000000000000000000000000000000000000000001000000000001000000000000000000000000000000000000000000000100000000000001010101010101000000000000000000000000000000000100000000000000000000000000010000000000000000000000000000000001000000020202020001010000040400000000000000000000000000000000010000020505020001040000000004000000000000000000000000000000010000020505020001040005050004000000000000000000000000000000000101010202010101040005050004000000000000000000000000000000000100000000000001040005050004000000000000000000000000000000000100000000000001040000000004000000000000000000000000000000000100000000000001040000000004000000000000000000000000000003030100000000000001010000000400000000000000000000000000000300000000000000000001010000010000000000000000000000000000030000000000000000000100000000010000000000000000000000000000030000030100000000010000000000010000000000000000000000000000030000030100000000010000000001000000000000000000000000000000030000030100000000010000000100000000000000000000000000000000000300000301020202060000000100000000000000000000000000000000000300000003060606060000000100000000000000000000000000000000000003000000000000000000000100000000000000000000000000000000000000030000000006060606060100000000000000000000000000000000000000000301000001010101010000000000000000000000000000000000000000000001000001000000000000000000000000000000000000000000000000000101000001010000000000000000000000000000000000000000000000010000000000000100000000000000000000000000000000000000000000010000000000000100000000000000000000000000000000000000000000000101010101010000000000000000000000`, img`
.............2..2.............
.............2..2.............
............2....2............
............2....2............
...........2.....2............
..........2......2222222......
..........2.............2.....
...........2...2222.22..22....
............2..2222.22....2...
............2..2222.22.22.2...
.............222222222.22.2...
.............2......22.22.2...
.............2......22....2...
.............2......22....2...
...........222......22...2....
..........2.........22..2.....
.........2.........2....2.....
.........2..22....2.....2.....
.........2..22....2....2......
.........2..22....2...2.......
..........2..222222...2.......
..........2...22222...2.......
...........2..........2.......
............2....222222.......
.............22..22222........
..............2..2............
.............22..22...........
............2......2..........
............2......2..........
.............222222...........
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile3,myTiles.tile5,myTiles.tile4,myTiles.tile2,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Rust":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
            case "Water":
            case "tile2":return tile2;
            case "White":
            case "tile4":return tile4;
            case "RustW":
            case "tile3":return tile3;
            case "RustB":
            case "tile5":return tile5;
            case "Acid":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
