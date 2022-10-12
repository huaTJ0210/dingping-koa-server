const { catagoryList } = require('../models/catagory')
const { ad } = require('../models/ad')
const { shopList } = require('../models/shoplist')
const { detail } = require('../models/detail')

module.exports = {
  async getCatagoryListService(ctx) {
    console.log(ctx.req)
    // 深拷贝后再进行转化
    const list = JSON.stringify(catagoryList)
    const res = JSON.parse(list)
    res.forEach(items => {
      items.forEach(item => {
        item['img'] = `http://${ctx.host}/image/catagory/${item['img']}`
      })
    })
    return res
  },
  async getADService(ctx) {
    const list = JSON.stringify(ad)
    const res = JSON.parse(list)
    res.forEach(item => {
      item['img'] = `http://${ctx.host}/image/ad/${item['img']}`
    })
    return res
  },
  async getShopListService(ctx) {
    const { currentPage } = ctx.query
    if (Number(currentPage) > 3) {
      return []
    }
    const list = JSON.stringify(shopList)
    const res = JSON.parse(list)
    res.forEach(item => {
      item['img'] = `http://${ctx.host}/image/shop/${item['img']}`
      item['id'] = item['id'] + currentPage
      item['title'] = item['title'] + currentPage
    })
    return res
  },
  async getShopDetailService(ctx) {
    const list = JSON.stringify(detail)
    const res = JSON.parse(list)
    res.img = `http://${ctx.host}/image/shop/${res.img}`
    return res
  }
}
