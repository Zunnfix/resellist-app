module.exports = {
  postProduct: async function (req, res) {
    const db = req.app.get('db')
    const { id } = req.session.user
    const { price, item, city, category_id, state, img } = req.body
    await db
      .postProduct([ id, price, item, category_id, city, state, img ])
      .then( product => {
        res.status(200).json(product)
      })
      .catch(err => {
        res.status(500).json({ errMessage: "There was an error!" })
        console.log(err)
      })
  },
  setFavorite: async function (req, res) {
    const db = req.app.get('db')
    await db.setFavorite([ req.session.user.id, req.body.id ])
    .then( product => {
      res.status(200).json(product)
    })
    .catch(err => {
      res.status(500).json({ errMessage: "Whoops! something went wrong." })
      console.log(err)
    })
  }
}