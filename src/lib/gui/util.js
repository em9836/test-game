export const id = "guiUtils";
/**
 * 
 * @param {string} tagName 
 * @param {string[]} [classes] classes
 * @param {string} [id] id
 * @returns 
 */
export function create(tagName,classes,id) {
    let e = document.createElement(tagName);
    if (id) e.id = id;
    if (classes) e.classList.add(classes);
    return e
}
/**
 * 
 * @param {string} id 
 */
export function getTotalChildren(id){
    const e = document.getElementById(id);
    let children = e.children;
    return children.length;
}