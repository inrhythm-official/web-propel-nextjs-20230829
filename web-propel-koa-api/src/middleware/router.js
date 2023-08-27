import Router from 'koa-router'
import auth from './auth.js'
import AuthController from '../controllers/AuthController.js'
import ListController from '../controllers/ListController.js'
import BookController from '../controllers/BookController.js'

const router = new Router({ prefix: '/api' })

router.get('/', async (ctx) => {
  ctx.body = { message: 'ReadersList API is healthy.' }
});

router
  .post('/login', AuthController.login)
  .post('/sign-up', AuthController.register)

router
  .get('/booklist', auth, ListController.getAllBooksByUserId)
  .post('/booklist', auth, ListController.addBookToList)
  .put('/booklist/:book_id', auth, ListController.updateBookOnList)
  .delete('/booklist/:book_id', auth, ListController.deleteBookOnList)

router
  .get('/books', BookController.getBooks)

export default router
