//Set up the connection configuration object with your PostgreSQL connection details:
const { Pool, Client } = require('pg');

const pool = new Pool({
	user: 'johnwelkener',
	host: 'localhost',
	database: 'instabible',
	password: 'Luge12345',
	port: '5432', // Default PostgreSQL port is 5432
});

// (async () => {
// 	const client = new Client()
// 	await client.connect()
// 	const res = await client.query('SELECT * FROM verses')
// 	console.log(res.rows)
// })()

module.exports = pool;
