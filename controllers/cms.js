const {
  getCatagoryListService,
  getADService,
  getShopListService,
  getShopDetailService,
} = require('../services/cms')

module.exports = {
  async getCatagoryList(ctx) {
    const list = await getCatagoryListService(ctx)
    ctx.body = JSON.stringify(list)
  },
  async getAD(ctx) {
    const list = await getADService(ctx)
    ctx.body = JSON.stringify(list)
  },
  async getShopList(ctx) {
    const list = await getShopListService(ctx)
    ctx.body = JSON.stringify(list)
  },
  async getShopDetail(ctx) {
    const list = await getShopDetailService(ctx)
    ctx.body = JSON.stringify(list)
  },
}
