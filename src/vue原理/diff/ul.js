let ul = {
    tagName: 'ul',
    attrs: {id: 'list'},
    children: [
        {
            tagName: 'li',
            attrs: {class: 'item'},
            children: ['Item 1']
        },
        {
            tagName: 'li',
            attrs: {class: 'item'},
            children: ['Item 2']
        }

    ]
};

let ul1 = {
    tagName: 'ul',
    attrs: {id: 'list1'},
    children: [
        {
            tagName: 'li',
            attrs: {class: 'item1'},
            children: ['Item 4']
        },
        {
            tagName: 'li',
            attrs: {class: 'item2'},
            children: ['Item 5']
        }

    ]
}

patches = {
    0: [{type: 1, attrs: {id: 'list1'}}],
    1: [{type: 1, attrs: {class: 'item1'}}],
    2: [{type: 2, content: 'Item 4'}],
    3: [{type: 1, attrs: {clss: 'item2'}}],
    4: [{type: 2, content: 'Item 5'}]
}