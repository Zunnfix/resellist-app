
module.exports = {
  postProduct: async function (req, res) {
    const db = req.app.get('db')
    const { id } = req.session.user
    const { price, item, city, category, state, img } = req.body
    await db.postProduct([ id, price, item, category, city, state, img ])
      .then( product => {
        res.status(200).json(product)
      })
      .catch(err => {
        res.status(500).json({ errMessage: "There was an error!" })
        console.log(err)
      })
  }
}