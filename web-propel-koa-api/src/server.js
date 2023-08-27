import dotEnv from 'dotenv'
dotEnv.config()
import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import persistence from './middleware/persistence.cjs'
import router from './middleware/router.js'

const port = process.env.PORT
const app = new Koa()

app.use(cors({ origin: '*' }))
app.use(bodyParser())
app.use(persistence.db)

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      error: err.message
    };
  }
});

app.use(router.routes()).use(router.allowedMethods())

app.listen(port, () =>
  console.log(`Server running on port ${port}.`)
);
