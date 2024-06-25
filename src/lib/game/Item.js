

export class Item {
    constructor(){
        this._id = 0;
        this._name = "";
        this.type = 0;
        this._stats = "";
    }
    /**
     * @overload
     * @param {*} obj
     */
    constructor({ id = undefined,
        name = undefined, type = "Item", stats = [] } = obj) {
            
    }
    get id(){return this._id;}
    get name(){return this._name;}
    get id(){return this._id;}
}

