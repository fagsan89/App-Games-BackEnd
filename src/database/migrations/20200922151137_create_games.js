
exports.up = function(knex) {
    return knex.schema.createTable('games', (table) =>{
        table.increments('id').unsigned().notNullable().primary('pk_games')
        table.string('descricao',100).notNullable()
        table.dateTime('criado_em').notNullable().defaultTo(knex.fn.now(6))
        table.dateTime('atualizado_em').notNullable().defaultTo(knex.fn.now(6))
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('games')
};
