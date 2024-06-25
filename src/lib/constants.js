
export const PLAYER_CONFIG = {
    "size": 1,
    hot_bar_slots: 10,
    bp_slots: 30,
    pov: {
        height: 10, aspect: 2, near: 0.1, far: 100
    },
    anims: {
        
    }
}
export const GAME_CONFIG = {

}
export const MAP_CONFIG = {
    tileSize: 32,

}
/**
 * @type {resource[]}
 */
export const resources = [
    { name: 'player', type: 'texture', value: 'img/player.png' },
    { name: 'player', type: 'texture', value: 'data/player.json' },
    { name: 'map', type: 'texture', value: 'img/map.png' },
    { name: 'map-tiles', type: 'texture', value: 'img/map/map-tiles.png' },
    { name: 'text-map', type: 'texture', value: 'img/map-inf.png' },

]