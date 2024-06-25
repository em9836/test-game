import { create } from "./util";
export class Slot {
    /**
     * creates a gui slot
     * @param {HTMLDivElement} parent
     * 
     * @param {object} [options]
     * @param {boolean} [options.draggable]
     * @param {number} [options.num] for slot number
     * @param {string[]} [options.classes] 
     */
    constructor(parent, options) {
        let {draggable, num} = options;
        this.gui = create("div","slot");
        // this.gui.parent = parent;
        this.label = null;
        if (parent.id === "hot-bar-slots") {
            this.gui.id = `hot-bar-slot-${num}`;
            this.label = create("div","hot-key-num");
            this.label.innerText = `${num}`;
            this.gui.appendChild(this.label);
        }
        this.draggable = draggable || false;
        this.gui.onclick = (evt) => {
            console.log(`${this.gui.id} clicked!`);
        }
        parent.appendChild(this.gui);
        return this;
    }
}