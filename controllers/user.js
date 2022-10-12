module.exports = {
  /*
  处理登录操作
*/
  async login(ctx) {
    ctx.body = {token:'adsfadsfy345423b43b25542b432'}
  },
  /*
  测试
*/
  async info(ctx) {
    console.log('info')
    ctx.body = [
      { id: 0, name: 'li' },
      { id: 1, name: 'wang' },
    ]
  },
}
