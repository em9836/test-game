import * as fs from "fs";
/** @typedef {{name: string, value:any}} param */
/**
 * searches through object array
 * @param {param[]} params parameters
 * @param {Object[]} obj object
 @returns {number} index
 */
export const search = (obj, params) => {
    let i, param, item;
    let index = -1;
    let paramsMatch = 0;
    let match = false;
    for (i in obj) {
        item = obj[i];
        for (param of params) {
            if (item[param.name] === param.value) paramsMatch++;
        }
        if (paramsMatch > 0) {
            if (paramsMatch === params.length) index = i;
            else paramsMatch = 0;
        }
    }
    return index;
}
export const trigger = (eventName, data) => {
    let evt = new CustomEvent(eventName, {
        detail: data
    });
    document.dispatchEvent(evt);
}
const resourceTypes = {
    "image": /\.(png|gif|jpe?g|svg)$/,
    "map": /\.(tmx|tsj|json|js)$/i,
    "tileset":/\.()$/,
    "json": /\.(json|tsj|world|tiled-project)$/
}
export class Resource{
    name = "";;
    type = "";
    value = "";
}
export class ResourceManager {
    /**
     *
     * @constant
     * @memberof ResourceManager
     @public
     */
    jsonRegex = /\.(json|tsj|world|tiled-project)$/
    _resources = [];
    constructor(resources) {
        this._resources = resources;
    };
    /**
     * 
     * @param {string} name 
     * @param {string} type 
     @returns {any} resource
     */
    getResource(name, type) {
        let item, resource = null;
        if (map.length > 0) {
            for (item of this._resources) {
                if (item.type === type) {
                    if (item.name === name) {
                        resource = item.value;
                        break;
                    }
                }
            }
            return resource
        }
    }
    static getFileContent(file) {

    }
    loadJson(file) {
        let data = null;
        if (fs.existsSync(file)) {
            if (this.jsonRegex.test(file)===true){
               data = JSON.parse(file);
               return data;
            }
        } else throw `cannot find resource ${file}`;
        return null;
    }

    static loadTmx() {

    }
}