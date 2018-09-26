/* compile可以分为三个阶段parse(解析)、optimize(优化)、generate(生成) ,最终需要得到render function*/

/**
 * html
 * <div :class='c' class='demo' v-if='isShow'>
 *    <span v-for='item in sz'>{{item}}</span>
 * </div>
*/

/**
 * js
*/
var html = '<div :class="c" class="demo" v-if="isShow"><span v-for="item in sz">{{item}}</span></div>';


/**
 * parse
 * parse会用正则等将template模板中进行字符串解析，得到指令、class、style等数据，形成AST(在计算机科学中，抽象语法树（abstract syntax tree）,或者语法树（syntax tree）,
 * 是代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码)
*/
const ast = {
    /*标签属性的map，记录标签上的属性*/
    'attrsMap': {
        ':class': 'c',
        'class': 'demo',
        'v-show': 'isShow'
    },
    /*解析得到的:class*/
    'classBinding': 'c',
    /*标签属性v-if*/
    'if': 'isShow',
    /*v-if的条件*/
    'ifConditions': [
        {
            'exp': 'isShow'
        }
    ],
    /*标签属性class*/
    'staticClass': 'demo',
    /*标签tag*/
    'tag': 'div',
    /*子标签数组*/
    'children': [
        {
            'attrsMap': {
                'v-for': 'item in sz'
            },
            /*for循环的参数*/
            'alias': 'item',
            /*for循环的对象*/
            'for': 'sz',
            /*for循环是否已被处理的标记位*/
            'forProcessed': true,
            'tag': 'span',
            'children': [
                {
                    /*表达式，_s是一个转字符串的函数*/
                    'expression': '_s(item)',
                    'text': '{{item}}'
                }
            ]
        }
    ]
}

/**
 * RegExp正则
 * 
*/
const ncname = '[a-zA-Z_][\\w\\-\\.]*';
const singleAttrIndentifier = /([^\s"'<>/=]+)/;
const singleAttrAssign = /(?:=)/;
const singleAttrValues = [
    /"([^"]*)"+/.source,
    /'([^']*)'+/.source,
    /([^\s"'=<>`]+)/.source
];
const attribute = new RegExp(
    '^\\s*' + singleAttrIdentifier.source +
    '(?:\\s*(' + singleAttrAssign.source + ')' +
    '\\s*(?:' + singleAttrValues.join('|') + '))?'
)
  
const qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
const startTagOpen = new RegExp('^<' + qnameCapture)
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>')
const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
const forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/
