
const controller = require ('../../src/controllers/user.controller')
const { User} = require ('../../config/dbConfig')
const { expect} = require('chai')

describe('User controller', () => {
	describe('#create', () =>{
		let req, res, response
		beforeEach(() => {
			response = {}
			req = {body: { firstName: 'carlos', lastName: 'ALastName', email: 'yeta@gmail.com'}}
			res = { send :(value) => {
					response = value}
			}
		})
		it('should return data of user created', async() => {
			await  controller.create(req, res);
			expect(response.firstName).to.eq('carlos');
			expect(response.lastName).to.eq('ALastName');
			expect(response.email).to.eq('yeta@gmail.com');
			expect(response.id).to.gt(0);
		})
		it('create a user', async() => {
			await controller.create(req, res);
			const userCreated = await User.findByPk(response.id);
			expect(userCreated.firstName).to.eq('carlos');
			expect(userCreated.lastName).to.eq('ALastName');
			expect(userCreated.email).to.eq('yeta@gmail.com');
		})
	});
})
