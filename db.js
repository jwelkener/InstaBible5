//Set up the connection configuration object with your PostgreSQL connection details:

const pool = new Pool({
	user: 'your_username',
	host: 'your_host',
	database: 'your_database_name',
	password: 'your_password',
	port: 'your_port_number', // Default PostgreSQL port is 5432
  });