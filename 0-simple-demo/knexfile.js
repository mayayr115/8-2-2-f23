// knexfile.js
module.exports = {
	development: {
		client: 'pg',
		connection: {
			user: 'marcy',
			password: 'marcy882',
			database: 'marcy',
			// the database name ^
		},
	}, // Work in progress. Only on your computer
	staging: {}, // "Fake" production, fake data, fake users, test integrations
	production: {}, // Deployed. Real users, real data.
};
