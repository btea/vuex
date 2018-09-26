/* Virtual DOM就是一棵以JavaScript对象（VNode节点）作为基础的树，用对象属性来描述节点，实际上它只是一层对真实DOM的抽象。
最终可以通过一系列操作使这棵树映射到真实环境上。*/

class VNode{
    constructor(tag, data, children, text, elm){
        /*当前节点的标签名*/
        this.tag = tag;
        /*当前节点的一些数据信息，比如props、attrs等数据*/
        this.data = data;
        /*当前节点的子节点，是一个数组*/
        this.children = children;
        /*当前节点的文本*/
        this.text = text;
        /*当前虚拟节点对应的真实节点*/
        this.elm = elm;
    }
}

/**
 * <template>
 *  <span class="demo" v-show="isShow">
 *     this is a span
 *  </span>
 * </template>
 * 
 * 
*/
function render(){
    return new VNode(
        'span',
        {
            /*指令集合数组*/
            directives: [
                /*v-show指令*/
                {
                    rawName: 'v-show',
                    expression: 'isShow',
                    name: 'show',
                    value: true
                }
                
            ],
            /*静态class*/
            staticClass: 'demo'
        },
        [new VNode(undefined, undefined,undefined,'this is a span')]
    )
}


render()

const vnode = {
    tag: 'span',
    data: {
        directives: [
            {
                rawName: 'v-show',
                expression: 'isShow',
                name: 'show',
                value: true
            }
        ],
        staticClass: 'demo'
    },
    children: {
        tag: undefined,
        data: undefined,
        children: undefined,
        text: 'this is a span'
    }
}





/*创建一个空节点*/
function createEmptyVNode(){
    const node = new VNode();
    node.text = '';
    return node;
}
/*创建一个文本节点*/
function createTextVNode(val){
    return new VNode(undefined,undefined,undefined,String(val));
}

/*克隆一个VNode节点*/
function cloneVNode(node){
    const cloneVnode = new VNode(
        node.tag,
        node.data,
        node.children,
        node.text,
        node.elm
    );
    return cloneVnode;
}