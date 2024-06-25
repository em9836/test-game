import Entity from "./Entity";

export default class Npc extends Entity{
    constructor(obj){
        super(obj);
        /** determines if game can  */
        // this.multiple = false;
        this.trades = [];
        this.quests = [];
    }

}