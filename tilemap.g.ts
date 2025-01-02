// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Void":
            case "level3":return tiles.createTilemap(hex`0100010000`, img`
. 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Level":
            case "level1":return tiles.createTilemap(hex`13000a0000000000000000000101010101030101010000000000000000000100000000000000000001000000000000000100000000000000000000000100020105010101000000000400000004000005020500000000000000000000000000000000010205000000000000000000000000000000000100020105010101000000000000000000000005000000000000010000000004000000040000010000000000000100000000000000000000000100000000000000010101010101010101010100`, img`
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile8,myTiles.tile4,myTiles.tile3,myTiles.tile2], TileScale.Sixteen);
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
            case "Ha3":
            case "tile8":return tile8;
            case "Pillar":
            case "tile3":return tile3;
            case "RustWindow":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
