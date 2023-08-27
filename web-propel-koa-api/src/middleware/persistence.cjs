const path = require('path')
const sqlite3 = require('sqlite3')
const dbPath = path.resolve(__dirname, '../../readerslist.db')

exports.db = async (ctx, next) => {
    try {
        ctx.db = new sqlite3.Database(dbPath);
        await next();
    } catch (e) {
        console.error('Error connecting to database:', e);
        ctx.throw(500, 'Database error');
    } finally {
        if (ctx.db) {
            await ctx.db.close();
        }
    }
};