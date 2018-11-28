const db = require('./database-connection')

module.exports = {
    getAll() {
        return db.select().from('students')
    },
    getById(id) {
        return db('students').where({ id: id }).first()
    }
};