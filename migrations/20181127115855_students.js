//makes a table
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', (student) => {
        student.increments('id')
        student.string('name')
        student.string('fave_animal')
        student.string('previous_occupation')
        student.decimal('hometown_lat')
        student.decimal('hometown_long')
        student.string('useless_superpower')
    })

};

//drops the table / remakes the table
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students')


};
