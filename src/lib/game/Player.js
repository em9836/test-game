import { WebGLRenderer } from 'three';
import { PLAYER_CONFIG } from '../constants';
import Entity from "./Entity";
/**
 * @typedef {{id: ""}} item
 */
export default class Player extends Entity {
    constructor({ id = undefined, name = "Player",
        type = "player", camera = undefined, image = undefined,
        size = PLAYER_CONFIG.size,main=true } = obj) {
        super(obj);
        /**
         * player stat
         */
        this._stats = {};
        this._items = [];
        /**
         * player camera
         */
        this._camera = null;
        this._hand = null;
        this._quests = [];
        /**
         * player controls
         */
        this._controls = [];
        this._settings = {
            player_tag: true,

        };
        this._map = null;
        this._main = main;
        let label = document.createElement("div")
        // label.classList.add("player-tag");
        label.className = "player-tag";
        label.textContent = super.name;
        

        if (this._main){
            //add controls
        }
        return this;
    }
    get isMain() { return this._main; }
    get camera() { return this._camera; }
    get stats() { return this._stats; }

    get equipedItem() { return this._camera; }
    set camera(cam) { this._camera = cam; }
    set stats(value) { this._stats = value; }
    getSetting(name){
        if (this._settings[name]) {
            return this._settings[name];
        }
    }
    toggleSetting(name){
        let setting =   this._settings[name] ;
        if (setting){
            if (typeof setting === "boolean") this.settings[name] = !setting;
        }
    }
    getQuest(name){
        return this._quests[name];
    }
    use(item, target) {

    }
    equip(item) {

    }
    unequip() {

    }
    /** 
     * @override
     @param {WebGLRenderer} renderer 
     */
    render(renderer) {

    }
    spawn(pos, scene) {
        super.spawn(pos, scene);
    }
    respawn() {

    }
    getStat() {
    }
    /**
     * 
     * @param {string} [name] 
     * @param {string} [key] 
     */
    getControl(name, key) {
        return this._controls[name];
    }
    add(name, value) { }
    /**
     * 
     * @param {"stat"} name 
     */
    remove(name) {

    }
    /**
     * 
     * @param {"stat"|"control"} name 
     * @param {any} value 
     */
    update(name, value) {

    }

}