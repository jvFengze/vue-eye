// 使用 Mock
var Mock = require('mockjs')
Mock.mock('/api/leftOne','get',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|7': [
        {
            "number|1-100": 100
        }
    ]
})
Mock.mock('/api/leftTwo', 'get', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|5': [{
        "value|100-1000": 1000,
        name: '@city'
    }]
})
Mock.mock('/api/leftThree', 'get', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10': [[
        '@cname',
        '@city',
        '@natural(18, 80)'
    ]]
})

Mock.mock('/api/middleTwo', 'get', {
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list1|5': [{
        name: '@cword(2,3)',
        value: '@natural(50, 150)'
    }],
    'list2|5': [{
        name: '@cword(2,3)',
        value: '@natural(50, 150)'
    }],
    'list3|5': [{
        name: '@cword(2,3)',
        value: '@natural(50, 150)'
    }],
    'list4|5': [{
        name: '@cword(2,3)',
        value: '@natural(50, 150)'
    }],
    // 'color1|5':[
    //     '@hex'
    // ],
    // 'color2|5': [
    //     '@hex'
    // ],
    // 'color3|5': [
    //     '@hex'
    // ],
    // 'color4|5': [
    //     '@hex'
    // ]
})

Mock.mock('/api/rightOne', 'get', {
    'list|7':[
        '@natural(30,180)'
    ]
})

Mock.mock('/api/rightTwo', 'get', {
    'list|5':[{
        name:'@cword(2)',
        value: '@natural(30,150)'
    }]
})