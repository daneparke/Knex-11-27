// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/FIRST_DATABASE_102'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  }
};
