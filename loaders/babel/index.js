// code -> AST
const acorn = require('acorn')
// 遍历AST 
const estraverse = require('estraverse')
// AST -> code
const escodegen = require('escodegen')

module.exports = function (content) {
    // AST解析过程模拟
    const AST_Object = acorn.parse(content)
    // 结果见 ./ast.js
    console.log("AST静态语法树：", AST_Object)
    // 遍历AST
    estraverse.traverse(AST_Object, {
        enter: function (node, parent) {
            if (node.type == 'VariableDeclaration') {
                console.log("遍历AST拿到const：", node.kind)
                node.kind = 'var'
            }
        }
    });
    // AST -> code
    console.log('AST替换之后生成的代码：', escodegen.generate(AST_Object))
}