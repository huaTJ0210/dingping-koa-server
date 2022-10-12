const Koa = require('koa')
const cors = require('@koa/cors')
const koaStatic = require('koa-static')
const router = require('./routers/index')
const CatchErrorMiddlewares = require('./middlewares/exception')

const app = new Koa()
app.use(cors())
app.use(CatchErrorMiddlewares())
app.use(router.routes())
app.use(router.allowedMethods())

app.use(koaStatic('./static'))

app.listen(3000, () => {
  console.log('...3000启动')
})
