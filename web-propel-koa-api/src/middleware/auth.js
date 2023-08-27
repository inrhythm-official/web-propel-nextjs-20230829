import jwt from 'jsonwebtoken'

const auth = async (ctx, next) => {
  const bearerToken = ctx.header?.authorization?.substring(7)
  const session = ctx.cookies.get('session')

  try {
    const decoded = await jwt.verify(bearerToken || session, process.env.JWT_SECRET)
    ctx.state.user_id = decoded.userId;
  } catch (err) {
    ctx.status = 401
    ctx.body = {
      message: 'Failed to authenticate the user'
    }
  }
  await next()
};

export default auth
