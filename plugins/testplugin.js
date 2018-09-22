class Watching4MyPlugin {
    apply(compiler) {
        // 在myplugin environment 阶段被广播
        compiler.hooks.myPlugin.tap('Watching4MyPlugin', (data) => {
            console.log('@watching4MyPlugin', data)
        })
    }
}

module.exports = Watching4MyPlugin