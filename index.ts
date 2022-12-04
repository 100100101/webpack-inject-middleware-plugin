import * as dotenv from 'dotenv'
import useNodeInspector from 'use-node-inspector'
import { Compiler } from 'webpack'
dotenv.config()

const { NODE_INSPECTOR_PORT, IS_USE_NODE_INSPECTOR } = process.env
if (IS_USE_NODE_INSPECTOR === 'true') {
    let port = 0
    if (NODE_INSPECTOR_PORT) {
        port = parseInt(NODE_INSPECTOR_PORT) || 9229
    }
    useNodeInspector({
        host: 'localhost',
        port,
    })
}

export class WebpackInjectMiddlewarePlugin {
    apply(compiler: Compiler) {
        compiler.hooks.done.tap('webpack-inject-middleware-plugin', stats => {
            console.log('Hello webpack-inject-middleware-plugin')
        })
    }
}
