module.exports = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.status = 500
      ctx.message = error.message
    }
  }
}
