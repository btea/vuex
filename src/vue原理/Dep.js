// 依赖收集


// 订阅者
class Dep{
    constructor(){
        // 用来存放watcher对象的数组
        this.subs = [];
    }

    addSub(sub){
        this.subs.push(sub);
    }

    /*通知所有watcher对象更新视图*/
    notify(){
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

// 观察者Watcher
class Watcher{
    constructor(){
        // 在new 一个Watcher对象时将该对象赋值给Dep.target，在get中用到
        Dep.target = this;
    }
    // 更新视图的方法
    update(){
        console.log('视图更新~~~~');
    }
}

Dep.target = null;


// 依赖收集
function defineReactive(obj, key, val){
    // 一个Dep类对象
    const dep = new Dep();

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter(){
            // 将Dep.target(即当前的watcher对象存入dep的subs中)
            dep.addSub(Dep.target);
            return val;
        },
        set: function reactiveSetter(newVal){
            if(val === newVal) return;
            // 在set的时候触发dep的notify来通知所有watcher对象更新视图
            dep.notify();
        }
    })
}

class Vue{
    constructor(options){
        this._data = options.data;
        observer(this._data);
        /*新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象*/
        new Watcher();
        /*在这里模拟render的过程，为了触发test属性的get函数*/
        console.log('render~',this._data.test);
    }
}