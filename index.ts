import * as dotenv from 'dotenv'
import useNodeInspector from 'use-node-inspector'
import { Compiler } from 'webpack'
dotenv.config()
const port = process.env.NODE_INSPECTOR_PORT
let portNumber = 0
if (port) {
    portNumber = parseInt(port) || 9229
}
useNodeInspector({
    host: 'localhost',
    port: portNumber,
})

export class WebpackInjectMiddlewarePlugin {
    apply(compiler: Compiler) {
        compiler.hooks.done.tap('webpack-inject-middleware-plugin', stats => {
            console.log('Hello webpack-inject-middleware-plugin')
        })
    }
}
