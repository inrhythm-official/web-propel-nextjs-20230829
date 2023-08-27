export default {
  async getAllBooksByUserId(ctx) {
    ctx.body = await new Promise ((resolve, reject) => {
      ctx.db.all('SELECT books.book_id, books.title, books.author FROM user_book_list JOIN books ON user_book_list.book_id = books.book_id WHERE user_book_list.user_id = ?', [ctx.state.user_id], (err, rows) => {
        if (err) reject("Read error: " + err.message)
        resolve(rows)
      });
    })
  },
  async addBookToList(ctx) {
    const { title, author } = ctx.request.body
    let book_id

    await new Promise ((resolve, reject) => {
      ctx.db.run('INSERT INTO books (title, author) VALUES (?, ?)', [title, author], function(err, row) {
        if (err) reject("Insert error: " + err.message)
        book_id = this.lastID
        resolve(row)
      });
    })

    await new Promise ((resolve, reject) => {
      ctx.db.run('INSERT INTO user_book_list (user_id, book_id) VALUES (?, ?)', [ctx.state.user_id, book_id], function(err, row) {
        if (err) reject("Insert error: " + err.message);
        resolve(row)
      });
    })

    ctx.status = 201
  },
  async updateBookOnList(ctx) {
    const { book_id } = ctx.params
    const { title, author, publication_date } = ctx.request.body

    await new Promise ((resolve, reject) => {
      ctx.db.run('UPDATE books SET title = ?, author = ?, publication_date = ? WHERE book_id = ?', [title, author, publication_date, book_id], function(err, row) {
        if (err) reject("Insert error: " + err.message)
        resolve(row)
      });
    })

    ctx.status = 200
  },
  async deleteBookOnList(ctx) {
    const { book_id } = ctx.params
    await new Promise ((resolve, reject) => {
      ctx.db.run('DELETE FROM books WHERE book_id = ?', [book_id], function(err, row) {
        if (err) reject("Insert error: " + err.message)
        resolve(row)
      });
    })
    await new Promise ((resolve, reject) => {
      ctx.db.run('DELETE FROM user_book_list WHERE book_id = ?', [book_id], function(err, row) {
        if (err) reject("Insert error: " + err.message)
        resolve(row)
      });
    })

    ctx.status = 200
  }
}
