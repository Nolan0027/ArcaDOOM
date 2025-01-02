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
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Void":
            case "level3":return tiles.createTilemap(hex`0100010000`, img`
. 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Hangar":
            case "level1":return tiles.createTilemap(hex`12000a00000000000000000101010101020101010000000000000000010000000000000000000100000000000001000000000000000000000001000104010101000000000300000003000004040000000000000000000000000000000001040000000000000000000000000000000001000104010101000000000000000000000004000000000001000000000300000003000001000000000001000000000000000000000001000000000000010101010101010101010100`, img`
. . . . . . . 2 2 2 2 2 2 2 2 2 . . 
. . . . . . 2 . . . . . . . . . 2 . 
. . . . . 2 . . . . . . . . . . . 2 
. 2 2 2 2 2 . . . . 2 . . . 2 . . 2 
2 . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . 2 
. 2 2 2 2 2 . . . . . . . . . . . 2 
. . . . . 2 . . . . 2 . . . 2 . . 2 
. . . . . 2 . . . . . . . . . . . 2 
. . . . . . 2 2 2 2 2 2 2 2 2 2 2 . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,myTiles.tile3,myTiles.tile2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [], -Infinity);
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
            case "Pillar":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
