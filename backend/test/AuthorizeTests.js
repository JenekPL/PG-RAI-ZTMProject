var expect = require('chai').expect

var User = require('../src/entities').User
var InMemRepository = require('../src/repositories').InMemRepository
var MockSecurity = require('../src/security').MockSecurity
var Authorize = require('../src/usecases').Authorize

const errors = require('../src/errors')

describe('Authorize', () => {
    const user = new User("username", "password", {})
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    it('when username and password are valid should return token', () => {
        var mockReposiotry = new InMemRepository({ [user.username]: user })
        var mockSecurity = new MockSecurity({ getToken: () => token })

        var authorize = new Authorize(mockReposiotry, mockSecurity)

        expect(authorize.call(user.username, user.password)).to.equals(token)
    });

    it('when user is not in repository should throw exception', () => {
        let mockRepository = new InMemRepository()

        let authorize = new Authorize(mockRepository)

        expect(() => authorize.call(user.username, user.password)).to.throws(errors.errUserNotExists)
    });
});