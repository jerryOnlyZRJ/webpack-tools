// loader是链式调用的，上一个loader会将处理结果传给下一个loader
// content是loader匹配到的单个文件内容 【String】
// 如果use是个loaders数组，则从后往前执行，pitch会被挂载在数组末端，最先执行

const loaderUtils = require('loader-utils');
// 模拟babel功能
const babel = require('./babel')

/**
 * loader Function
 * @param {String} content 文件内容
 */
module.exports = async function (content) {
    babel(content)
    // webpack-loader实战
    // 获取用户配置的options
    const options = loaderUtils.getOptions(this);
    /**
     * [output]
     * { test: 1 }
     */
    console.log('***options***', options)
    /**
     * [output]
     * const s = require('./module.js')
     * console.log(s.s)
     */
    console.log('***content***', content)
    /**
     * [output]
     * test
     */
    console.log('***this data***', this.data.value)
    //loader想要返回编译结果可以直接return，
    // 但日常开发中我们尽可能使用this.callback
    // ***同步***
    // return "{};" + content
    // 或者
    // this.callback(null, "{};" + content)
    // this.callback(
    //     // 当无法转换原内容时，给 Webpack 返回一个 Error
    //     err: Error || null,
    //     // 原内容转换后的内容
    //     content: string || Buffer,
    //     // 用于把转换后的内容得出原内容的 Source Map，方便调试
    //     sourceMap?: SourceMap,
    //     // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回，
    //     // 以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能
    //     abstractSyntaxTree?: AST
    // );
    //***异步***
    function timeout(delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("{};" + content)
            }, delay)
        })
    }
    // const data = await timeout(1000)
    // return data
    const callback = this.async()
    timeout(1000).then(data => {
        callback(null, data)
    })
}

module.exports.pitch = (remaining, preceding, data) => {
    console.log('***remaining***', remaining)
    console.log('***preceding***', preceding)
    // data会被挂在到当前loader的上下文this上在loaders之间传递
    data.value = "test"
}