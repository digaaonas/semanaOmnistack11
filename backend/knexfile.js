// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      password: 'e77540ae54f74e22a8ed58a34bc99cf4',
      host: 'localhost',
      port: 5432,
      database: 'bethehero'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      password: 'e77540ae54f74e22a8ed58a34bc99cf4',
      host: 'localhost',
      port: 5432,
      database: 'test'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
