//makes a table
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', (student) => {
        student.increments('id')


    })

};

//drops the table / remakes the table
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students')


};
