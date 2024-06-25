import { CSS2DRenderer } from "three";
import { create } from "./util";
export default class Gui {
    /**
     * 
     * @param {HTMLDivElement} container 
     * @param {CSS2DRenderer} renderer 
     * @returns 
     */
    constructor(container = create("div", ["gui"], "gui"), renderer) {
        this.hotbar = create("div", ["win"], "hotbar");
        this.settings = null;
        this.stats = null;
        
        return this;
    }
}