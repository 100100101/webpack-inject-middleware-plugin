import { Compiler } from 'webpack'
export class WebpackInjectMiddlewarePlugin {
    constructor() {
        //
    }

    apply(compiler: Compiler) {
        compiler.hooks.done.tap('webpack-inject-middleware-plugin', stats => {
            console.log('Hello webpack-inject-middleware-plugin')
        })
    }
}
