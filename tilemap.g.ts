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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Void":
            case "level3":return tiles.createTilemap(hex`0100010000`, img`
. 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Hangar":
            case "level1":return tiles.createTilemap(hex`15000a00000000000000000000000000000000000000000000000000000000000000000101010101020101010000000000000000000000010000000000000000000100000000000001010101000000000300000003000001000401010500000001000000000000000000000006040000000000000000000000000000000000000001000401010500000001000000000000000000000006000000000001010101000000000300000003000001000000000000000001000000000000000000000100000000000000000000010101010101010101010000`, img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . 2 . . . . . . . . . 2 . 
. . . . . 2 2 2 2 . . . . 2 . . . 2 . . 2 
. 2 2 2 2 . . . 2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . 2 
. 2 2 2 2 . . . 2 . . . . . . . . . . . 2 
. . . . . 2 2 2 2 . . . . 2 . . . 2 . . 2 
. . . . . . . . 2 . . . . . . . . . . 2 . 
. . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile4,myTiles.tile3,myTiles.tile2,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
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
            case "Wires":
            case "tile6":return tile6;
            case "RustWindow2":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
