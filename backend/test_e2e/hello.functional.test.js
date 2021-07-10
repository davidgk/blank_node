const { expect} = require('chai')
const url = 'http://localhost:4000';
const request = require('supertest')(url)
describe('Hello API test', () => {

	it('should return Hello World', (done) => {
		request.post('/graphql')
			.send( { query: '{ hello }'})
			.expect(200)
			.end( (err, res) => {
				expect(res.body.data.hello).eq('Hello world!')
				done();
			});
	})

});
