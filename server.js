const server = require('express')()
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const {
    createBundleRenderer
} = require('vue-server-renderer')
const isProd = process.env.NODE_ENV === 'production'

/*const template = require('fs').readFileSync('/path/to/index.template.html', 'utf-8')
const serverBundle = require('/path/to/vue-ssr-server-bundle.json')
const clientManifest = require('/path/to/vue-ssr-client-manifest.json')

const renderer = createRenderer(serverBundle, {
    template,
    clientManifest
})
*/
let renderer
let readyPromise
const templatePath = resolve('./src/index.template.html')
const serverInfo =
    `express/${require('express/package.json').version} ` +
    `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

function createRenderer(bundle, options) {
    // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
    return createBundleRenderer(bundle, Object.assign(options, {
        // for component caching
        cache: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15
        }),
        // this is only needed when vue-server-renderer is npm-linked
        //basedir: resolve('./dist'),
        // recommended for performance
        runInNewContext: false
    }))
}
if (isProd) {
    const template = fs.readFileSync(templatePath, 'utf-8')

    const bundle = require('./dist/vue-ssr-server-bundle.json')
    const clientManifest = require('./dist/vue-ssr-client-manifest.json')
    renderer = createBundleRenderer(bundle, {
        template,
        clientManifest
    })

} else {
    readyPromise = require('./build/setup-dev-server')(
        server,
        templatePath,
        (bundle, options) => {
            renderer = createBundleRenderer(bundle, options)
        }
    )
}


function render(req, res) {
    const s = Date.now()

    res.setHeader("Content-Type", "text/html")
    res.setHeader("Server", serverInfo)

    const handleError = err => {
        if (err.url) {
            res.redirect(err.url)
        } else if (err.code === 404) {
            res.status(404).send('404 | Page Not Found!')
        } else {
            // Render Error Page or Redirect
            res.status(500).send('500 | Internal Server Error!')
            console.error(`error during render : ${req.url}`)
            console.error(err.stack)
        }
    }

    const context = {
        title: 'Hello Vue SSR', // default title
        url: req.url
    }
    renderer.renderToString(context, (err, html) => {
        if (err) {
            return handleError(err)
        }
        res.send(html)

        if (!isProd) {
            console.log(`whole request: ${Date.now() - s}ms`)
        }
    })
}


server.get('*', isProd ? render : (req, res) => {
    readyPromise.then(() => render(req, res))
})


const port = process.env.PORT || 8081
server.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})
/*
const port = 8080;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});*/