const bcrypt = require('bcryptjs')

module.exports = {
  login: async function (req, res) {
    const db = req.app.get('db')
    const { username, password } = req.body
    const info = await db.getUserInfo(username)
    const isCorrect = await bcrypt.compare(password, info[0].password)
    if (isCorrect === true) {
      req.session.user = {
        id: info[0].id,
        firstName: info[0].first_name,
        lastName: info[0].last_name,
        username,
        email: info[0].email,
        img: info[0].profile_img
      }
      res.status(200).json(req.session.user)
    } else {
      res.status(401).json({
        error: "INCORRECT_USERNAME_OR_PASSWORD"
      })
    }
  },
  register: async function (req, res) {
    const db = req.app.get('db')
    const {
      firstName, lastName,
      username, password,
      email
    } = req.body
    let user = await db.checkForUser([username, email])
    if (user[0]) {
      res.status(406).json({
        error: "USERNAME_TAKEN"
      })
    } else {
      const hash = await bcrypt.hash(password, 10)
      console.log(hash)
      let newUser = await db.registerUser([firstName, lastName, username, hash, email])
      req.session.user = {
        id: newUser[0].id,
        name: firstName + ' ' + lastName,
        username,
        email
      }
      res.status(200).json(req.session.user);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200)
  }
}