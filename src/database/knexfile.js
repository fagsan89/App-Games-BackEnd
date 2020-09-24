// Update with your config settings.

module.exports = {
    client: 'pg',
    // connection: {
    //   host : process.env.HOST,
    //   port : process.env.PORT,      
    //   user: process.env.USER,
    //   password: process.env.PASSWORD,
    //   database: process.env.DATABASE
    // },
    connection: {
      host : '127.0.0.1',
      port : 5432,      
      user: 'postgres',
      password: 'postgre',
      database: 'LoginReactNode'
    },
    pool: {
      min: 0,
      max: 15
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  

 

};
