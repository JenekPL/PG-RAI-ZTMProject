var expect = require('chai').expect

var User = require('../src/entities').User
var Stop = require('../src/entities').Stop
var InMemRepository = require('../src/repositories').InMemRepository
var MockSecurity = require('../src/security').MockSecurity
var GetFavouriteStops = require('../src/usecases').GetFavouriteStops

const errors = require('../src/errors')

describe('GetFavouriteStops', () => {
    const stopArray = [ new Stop() ]
    const user = new User("username", "password", stopArray)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    it('when credentails are valid should return stops', () => {
        var mockReposiotry = new InMemRepository({ [user.username]: user })
        var mockSecurity = new MockSecurity({ verifyToken: () => user.username })

        var getFavouriteStops = new GetFavouriteStops(mockReposiotry, mockSecurity)

        expect(getFavouriteStops.call(token)).to.equals(stopArray)
    });

    it('when given user is not exists should throw error', () => {
        var mockReposiotry = new InMemRepository({ [user.username]: user })
        var mockSecurity = new MockSecurity({ verifyToken: () => "invalid_username" })

        var getFavouriteStops = new GetFavouriteStops(mockReposiotry, mockSecurity)

        expect(() => getFavouriteStops.call(token)).to.throws(errors.errUserNotExists)
    });

    it('when token is not valid should throw error', () => {
        var mockReposiotry = new InMemRepository({ [user.username]: user })
        var mockSecurity = new MockSecurity({ verifyToken: () => { throw new Error(errors.invalidCredentials) } })

        var getFavouriteStops = new GetFavouriteStops(mockReposiotry, mockSecurity)

        expect(() => getFavouriteStops.call(token)).to.throws(errors.invalidCredentials)
    });
});