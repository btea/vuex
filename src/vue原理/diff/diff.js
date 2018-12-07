// import fun from './util'
// import listDiff from './element'

let fun = require('./util');
let listDiff = require('./element');

const REPLACE = 0;  //replace => 0
const ATTRS = 1;    // attrs => 1
const TEXT = 2;     // text => 2
const REORDER = 3;  // reorder => 3（重排，元素替换顺序）

// diff入口，比较新旧两棵树的差异
function diff(oldTree, newTree){
    let index = 0;
    let patches = {}; // 用来记录每个节点差异的补丁对象
    walk(oldTree, newTree, index, patches);
    return patches;
}


/**
 * 遍历查找节点差异
 * @param {Object} oldNode
 * @param {Object} newNode 
 * @param {Number} index --currentNodeIndex
 * @param {Object} patches -记录接单差异的对象
*/

function walk(oldNode, newNode, index, patches){
    let currentPatches = [];
    // 如果oldNode被remove掉，即newNode === null的时候  
    if(newNode === null || newNode === undefined){
        // 先不做操作，具体交给list diff处理
    }else if(fun.isString(newNode) && fun.isString(oldNode)){ // 比较文本之间的不同
        if(newNode !== oldNode){
            currentPatches.push({type: TEXT,content: newNode});
        }
    }else if(oldNode.tagName === newNode.tagName && newNode.key === oldNode.key){ // 比较attrs的不同
        let attrsPatches = diffAttrs(oldNode, newNode);
        if(attrsPatches){
            currentPatches.push({type: ATTRS, attrs: attrsPatches});
        }
        // 递归进行子节点的diff比较
        diffChildren(oldNode.children, newNode.children, index, patches);
    }else{
        currentPatches.push({type: REPLACE,node: newNode});
    }
    if(currentPatches.length){
        patches[index] = currentPatches;
    }
}

function diffAttrs(oldNode, newNode){
    let count = 0;
    let oldAttrs = oldNode.attrs;
    let newAttrs = newNode.attrs;

    let key,value,attrsPatches = {};

    // 如果存在不同的attrs
    for(key in oldAttrs){
        value = oldAttrs[key];
        // 如果oldAttrs移除掉一些attrs，newAttrs[key] === undefined;
        if(newAttrs[key] !== value){
            count++;
            attrsPatches[key] = newAttrs[key];
        }
    }
    // 如果存在新的attr
    for(key in newAttrs){
        value = newAttrs[key];
        if(!oldAttrs.hasOwnProperty(key)){
            count++;
            attrsPatches[key] = value;
        }
    }

    if(count === 0){
        return null;
    }

    return attrsPatches;
}



// 设置节点唯一标识
let key_id = 0;
// diff with children
function diffChildren(oldChildren, newChildren, index, patches){
    // 存放当前node的标识，初始化值为0
    let currentNodeIndex = index;

    oldChildren.forEach((child,i) => {
        key_id++;
        let newChild = newChildren[i];
        currentNodeIndex = key_id;

        // 递归继续比较
        walk(child, newChild, currentNodeIndex, patches);
    })
}

module.exports = diff;

let ul = listDiff('ul', { id: 'list' }, [
    listDiff('li', { class: 'item' }, ['Item 1']),
    listDiff('li', { class: 'item' }, ['Item 2'])
]);
let ul1 = listDiff('ul', { id: 'list1' }, [
    listDiff('li', { class: 'item1' }, ['Item 4']),
    listDiff('li', { class: 'item2' }, ['Item 5'])
]);
let patches = diff(ul, ul1);

console.log(patches);