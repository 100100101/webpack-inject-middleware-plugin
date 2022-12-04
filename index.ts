import { Compiler } from 'webpack'
type TMiddleware = () => Promise<void>
type TOptions = {
    middleware: TMiddleware
}
export class WebpackInjectMiddlewarePlugin {
    private readonly middleware: TMiddleware
    constructor({ middleware }: TOptions) {
        this.middleware = middleware
    }

    apply(compiler: Compiler) {
        console.log('compiler:', compiler)

        compiler.hooks.done.tap('webpack-inject-middleware-plugin', stats => {
            console.log('Hello webpack-inject-middleware-plugin')
        })
    }
}
