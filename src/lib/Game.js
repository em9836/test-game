import { Scene, WebGLRenderer } from "three";
import { CSS2DRenderer } from "three/examples/jsm/Addons.js";
import Player from "./game/Player";
import { Gui } from "./gui";

export default class Game {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     * @param {document} document 
     */
    constructor(canvas, document) {
        // this._currentMap = null;
        this._worlds = [];
        this._maps = [];
        /**
         * @type {Gui|HTMLDivElement}
         */
        this._gui = document.getElementById("gui");

        this._guiRenderer = new CSS2DRenderer({ domElement: this._gui });
        /**

         * @type {HTMLCanvasElement}
         */
        this.canvas = canvas;
        /**
        Game renderer
         * @type {WebGLRenderer}
         */
        this.gameRenderer = new WebGLRenderer({ canvas: this.canvas });
        /**
         * @type {Scene}
         */
        this.scene = new Scene();
        /**
        for multiplayer
         * @type {Player}
         */
        this.player = null;
        this._resources = [];
        document.addEventListener('keydown',this.onKeyDown);
    }
    get GameRenderer() { return this.gameRenderer; }
    get GuiRenderer() { return this._guiRenderer; }
    get gui() { return this.renderer };
    resizeWindow() {

    }

    start() {

    }
    loadMap(id) {

    }
    loadWorld() {

    }
    /**
     * 
     * @param {KeyboardEvent} evt 
     */
    onKeyDown(evt) {
        console.log(evt.key);
    }
    /**
     * 
     * @param {*[]} [map] resource map
     */
    loadResources(map) {
        if (map) {

        } else {
            if (this._resources.length > 0) {

            } else throw "no resources to load";
        }
    }
    getWorld(id) {

    }
    getMap(id) {

    }
    onGameEvent(evt, fn) {

    }
    render(renderer) {

    }
}