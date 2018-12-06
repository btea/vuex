
// 双向数据绑定


class Vue {
    constructor(options){
        this._data = options.data;
        observer(this._data);
    }
}


function observer(value){
    if(!value || typeof value != 'object'){
        return ;
    }
    Object.keys(value).forEach(key => {
        defineRective(value,key,value[key]);
    })
}

function defineRective(obj, key, val){
    Object.defineProperty(obj,key,{
        enumerable: true, /*属性可枚举*/
        configurable: true, /*属性可 被修改和删除*/
        get: function reactiveGetter(){
            return val;
        },
        set: function reactiveSetter(newVal){
            if(val === newVal) return;
            cb(newVal);
        }
    })
}

function cb(val){
    // 渲染视图
    console.log('视图更新')
}

let o = new Vue({
    data: {
        test: 'I am test'
    }
})
o._data.test = 'hello world'; // 视图更新

o._data.aa = '123';
console.log(o._data);
o._data.test = '23333'