module.exports = {
  getAllProducts: async function(req, res) {
    const db = req.app.get('db')
    const products = await db.getAllProductInfo()
    console.log(products)
    res.status(200).json(products)
  }
}