const _ = exports;

_.setAttr = function setAttr(node, key, value){
    switch(key){
        case 'style':
            node.style.cssText = value;
            break;
        case 'value':
            let tagName = node.tagName || '';
            tagName = tagName.toLowerCase();
            if(tagName === 'input' || tagName === 'textarea'){
                node.value = value;
            }else{
                node.setAttribute(key, value);
            }
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

_.slice = function slice(arrayLike, index){
    return Array.prototype.slice.call(arrayLike, index);
}

_.type = function type(obj){
    return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g,'');    
}

_.isArray = function isArray(arr){
    return _.type(arr) === 'Array';
}

_.toArray = function toArray(listlike){
    if(!listlike){
        return [];
    }
    let list = [];
    for(let i = 0; i < listlike.length; i++){
        list.push(listlike[i]);
    }
    return list;
}

_.isString = function isString(list){
    return _.type(list) === 'String';
}

_.isElementNode = function (node){
    return node.nodeType === 1;
}