import useNodeInspector from 'use-node-inspector'
import { Compiler } from 'webpack'
export interface IOptions {
    isUseNodeInspector?: boolean
    nodeInspectorPort?: number
}

export class WebpackInjectMiddlewarePlugin {
    private readonly isUseNodeInspector: IOptions['isUseNodeInspector']
    private readonly nodeInspectorPort: IOptions['nodeInspectorPort']

    constructor({
        isUseNodeInspector = false,
        nodeInspectorPort = 9229,
    }: IOptions = {}) {
        this.isUseNodeInspector = isUseNodeInspector
        this.nodeInspectorPort = nodeInspectorPort
    }

    apply(compiler: Compiler) {
        if (this.isUseNodeInspector) {
            const port = this.nodeInspectorPort
            useNodeInspector({
                host: 'localhost',
                port,
            })
        }
        compiler.hooks.done.tap('webpack-inject-middleware-plugin', stats => {
            console.log('Hello webpack-inject-middleware-plugin')
        })
    }
}
