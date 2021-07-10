const dotenv = require('dotenv').config();
const { User } = require('../../config/dbConfig');
const { expect} = require('chai')
require('../beforeEach.test')

describe.only('User', () => {
	it('should allow to create a user', async () => {
		const result = await  User.create({firstName: 'pepe',
			lastName: 'Argento',
			email: 'casmientoNo@gmail.com'})
		expect(result.firstName).to.eq('pepe');
	});

});
