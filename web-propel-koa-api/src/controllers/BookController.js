import { genres } from '../constants/genres.js'

export default {
    getBooks(ctx) {
        const { genre } = ctx.request.query
        const res = genres[genre]
        ctx.body = {
            books: res
        }
    }
}
