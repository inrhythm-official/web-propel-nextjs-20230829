import jwt from 'jsonwebtoken'

export default {
  async login(ctx) {
    const { email, password } = ctx.request.body

    let user = await new Promise ((resolve, reject) => {
      ctx.db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) reject("Read error: " + err.message)
        resolve(row)
      })
    })

    if (!user) {
      ctx.status = 401
      return ctx.body = {
        error: 'Invalid email or password'
      }
    }

    const isMatch = password === user.password

    if (!isMatch) {
      ctx.status = 401
      return ctx.body = {
        error: 'Invalid email or password'
      }
    }

    const token = jwt.sign( { userId: user.user_id }, process.env.JWT_SECRET )

    ctx.body = {
      token
    }
  },
  async register(ctx) {
    try {
      const { email, password } = ctx.request.body
      let user = await new Promise ((resolve, reject) => {
        ctx.db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
          if (err) reject("Read error: " + err.message)
          resolve(row)
        });
      })

      if (user) {
        ctx.status = 400
        return ctx.body = {
          success: false,
          error: 'user already exists'
        }
      }

      await new Promise ((resolve, reject) => {
        ctx.db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], (err, row) => {
          if (err) reject("Read error: " + err.message)
          resolve(row)
        });
      })

      user = await new Promise ((resolve, reject) => {
        ctx.db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
          if (err) reject("Read error: " + err.message)
          resolve(row)
        })
      })

      const token = jwt.sign( { userId: user.user_id }, process.env.JWT_SECRET )

      ctx.status = 201
      ctx.body = {
        token
      }
    } catch (error) {
      console.error('Error inserting user:', error)
      ctx.throw(500, 'Database error')
    }
  }
}
