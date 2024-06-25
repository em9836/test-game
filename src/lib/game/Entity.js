import { BoxGeometry, MeshBasicMaterial, Scene, TextureLoader } from "three";
/** @typedef {import {  } from "../@types/index.ts";} */
/**
 * @classdesc for NPC/PLAYER
 * uses three.js
 */
export default class Entity {
    /**
     * 
     * @param {object} obj parameters
     * @param {string|number|undefined} [obj.id] Entity id
     * @param {string} [obj.image] resource id
     * @param {string} [obj.type] Entity Type
     * @param {string} [obj.modelType] Entity ModelType
     * @param {[width: number, height: number,depth: number]} [obj.size] Entity size
     */
    constructor({
        id = undefined, name = undefined, image = "", type = "entity", modelType = "mesh", size = [1, 0, 1]
    } = obj) {
        /**@type {string | number| undefined} */
        this.id = id;
        /**
        @type {string} */
        this.name = name;
        this._size = size;
        /** Entity Model
        @type {any} */
        this.model = null;
        /** Entity Position
        @type {position} */
        this.pos = [0, 0, 0];
        /**
         * @private
         */
        this.modelType = modelType
        /**
         * Entity type
         @protected
         */
        this._type = "entity";
        this.settings = {};
        /** Entity sprite image
         * @type {string}  
         */
        this.image = image;
        this._texture = new TextureLoader.load(image);
        this.anims = [];
        /**
         * entity health
         @type {number}
         */
        this.health = 100;
        /**
         * Entity Spawn point
         @type {any}
         */
        this._home = null;
        let mat, geo;
        if (modelType === "mesh") {
            geo = new BoxGeometry(this.size);
            mat = new MeshBasicMaterial({ map: this._texture, transparent: true });
            this.model = new Mesh(geo, mat);
        }
    }
    /**render entity model*/
    render() {
        // if (this.model === null) {
        //     let mat, geo;
        //     if (this.modelType === "mesh") {
        //         geo = new BoxGeometry(this._size);
        //         mat = new MeshBasicMaterial({ map: this._texture, transparent: true });
        //         this.model = new Mesh(geo, mat);
        //     }
        // }


    }
    /**
     * spawn Entity
     @param {Vector3| [x:number,y:number,z:number]} [pos]  
     @param {Scene} scene
     */
    spawn(pos, scene) {
        let position = null, spawn, geo, mat;
        if (pos) position = pos;
        else if (this._home !== null) position = this._home;

        if (this.model === null) {
            geo = new BoxGeometry(this.size);
            mat = new MeshBasicMaterial({ map: this._texture, transparent: true });
            this.model = new Mesh(geo, mat);
        }
        this.model.position.set(position);
        scene.add(this.model);
    }
    /**
     * despawn Entity 
     (destroys entity model)
     */
    despawn() {
    }
    /**
     * 
     */
    update() { }
    get position() { return this.pos; }
    get type() { return this._type; }
    get size() { return this._size; }
    get spawnpoint() { return this._home; }
    set size(value) { this._size = value; }
    set spawnpoint(value) { this._home = value; }
    get animations() { return this.anims }
    /**
     * 
     * @param {object} animation 
     * @param {string} animation.name
     * @param {number} animation.frames
     */
    addAnimation(animation) {
        this.anims.push[animation];
    }
    getAnimation(name) {
        let i;
        for (i of this.anims) {
            if (i.name === name) return i;
        }
        return null;
    }

}