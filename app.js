import Koa from 'koa'
import path from 'path'
import koaStatic from 'koa-static'

// var static = require('koa-static')

const app = new Koa()

const staticPath = './static'

app.use(koaStatic(
	path.join(__dirname, staticPath)
))


// response
app.use(async (ctx) => {
	ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('server started 3000'))

export default app

