const knex = require('./knex.js');

const getPets = async () => {
	// knex.raw returns a query result object
	let result = await knex.raw('SELECT * FROM pets');

	// .rows is an array containing the query data
	return result.rows;
};

const getPeople = async () => {
	// often, we just destructure the rows and return
	let { rows } = await knex.raw('SELECT * FROM pets');
	return rows;
};

const getPetsByOwnerNameAndType = async (ownerName, type) => {
	const query = `
    SELECT pets.name, pets.id
    FROM pets
      JOIN people ON pets.owner_id = people.id
    WHERE people.name=? AND pets.type=?
  `;
	const { rows } = await knex.raw(query, [ownerName, type]);
	return rows;
};

const main = async () => {
  const pets = await getPets();
  const people = await getPeople();
  const annsDogs = await getPetsByOwnerNameAndType('Ann Duong', 'dog');

  console.log('all pets:', pets);
  console.log('all people:', people);
  console.log('anns dogs:', annsDogs);

	knex.destroy();
};

main();
