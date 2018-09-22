// webpack向下兼容，所以监听钩子可以使用plugin方法
const pluginName = 'MyPlugin'
const { SyncHook } = require("tapable");
class MyPlugin {
    // 传入webpack config中的plugin配置参数
    constructor(options) {
        // { test: 1 }
        console.log('@plugin constructor', options);
    }

    apply(compiler) {
        console.log('@plugin apply');
        // 初始化自定义事件
        compiler.hooks.myPlugin = new SyncHook(['data'])

        compiler.hooks.environment.tap(pluginName, (options) => {
            //广播自定义事件
            compiler.hooks.myPlugin.call("It's my plugin.")
            console.log('@environment');
        });

        compiler.hooks.afterEnvironment.tap(pluginName, (options) => {
            console.log('@after-environment');
        });

        compiler.hooks.entryOption.tap(pluginName, (options) => {
            console.log('@entry-option');
        });

        compiler.hooks.afterPlugins.tap(pluginName, (options) => {
            console.log('@after-plugins');
        });

        compiler.hooks.afterResolvers.tap(pluginName, (options) => {
            console.log('@after-resolvers');
        });

        compiler.hooks.beforeRun.tap(pluginName, (options) => {
            console.log('@before-run');
        });

        compiler.hooks.run.tap(pluginName, (options) => {
            console.log('@run');
        });

        compiler.hooks.watchRun.tap(pluginName, (options) => {
            console.log('@watch-run');
        });

        compiler.hooks.normalModuleFactory.tap(pluginName, (options) => {
            console.log('@normal-module-factory');
        });

        compiler.hooks.contextModuleFactory.tap(pluginName, (options) => {
            console.log('@context-module-factory');
        });

        compiler.hooks.beforeCompile.tap(pluginName, (options) => {
            console.log('@before-compile');

        });

        compiler.hooks.compile.tap(pluginName, (options) => {
            console.log('@compile');
        });

        compiler.hooks.thisCompilation.tap(pluginName, (options) => {
            console.log('@this-compilation');
        });

        compiler.hooks.compilation.tap(pluginName, (options) => {
            console.log('@compilation');
        });

        compiler.hooks.make.tap(pluginName, (options) => {
            console.log('@make');
        });

        compiler.hooks.compilation.tap(pluginName, (compilation) => {

            compilation.hooks.buildModule.tap(pluginName, (options) => {
                console.log('@build-module');
            });

            compilation.hooks.normalModuleLoader.tap(pluginName, (options) => {
                console.log('@normal-module-loader');
            });

            compilation.hooks.seal.tap(pluginName, (options) => {
                console.log('@seal');
            });
        });

        compiler.hooks.afterCompile.tap(pluginName, (options) => {
            console.log('@after-compile');
        });

        compiler.hooks.shouldEmit.tap(pluginName, (options) => {
            console.log('@should-emit');
        });

        compiler.hooks.emit.tap(pluginName, (options) => {
            console.log('@emit');
        });

        compiler.hooks.afterEmit.tap(pluginName, (options) => {
            console.log('@after-emit');
        });

        compiler.hooks.done.tap(pluginName, (options) => {
            console.log('@done');
        });

        compiler.hooks.failed.tap(pluginName, (options) => {
            console.log('@failed');
        });

        compiler.hooks.invalid.tap(pluginName, (options) => {
            console.log('@invalid');
        });
    }
}
module.exports = MyPlugin