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
    'list|6': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        "number|1-100": 100
    }]
})