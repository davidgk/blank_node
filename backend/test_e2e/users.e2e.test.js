let chaiHttp = require('chai-http');
let chai = require('chai');
chai.use(chaiHttp);
const url = 'http://localhost:4000';
const expect = require('chai').expect;
require('./beforeEach.test');

describe('Users', () => {
	describe('#create', () => {
		it('should create a user', (done) => {
			chai.request(url)
				.post('/users')
				.send({ firstName: 'carlos', lastName: 'ALastName', email: 'yeta@gmail.com'})
				.end( function(err,res){
					console.log(res.body)
					expect(res).to.have.status(200);
					done();
				});
		})
	})



});
