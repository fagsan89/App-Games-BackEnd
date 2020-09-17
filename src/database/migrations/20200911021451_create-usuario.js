
exports.up = function(knex) {
    return knex.schema.createTable('usuario', (table) =>{
        table.increments('id').unsigned().notNullable().primary('pk_usuario')
        table.string('name',100).notNullable()
        table.string('email',100).notNullable()
        table.string('password',200).notNullable()
        table.integer('role').notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuario')
};
