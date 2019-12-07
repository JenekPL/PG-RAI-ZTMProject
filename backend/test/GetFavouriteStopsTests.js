import { expect } from 'chai'

import { User } from "../src/entities";
import { InMemRepository } from "../src/repositories";
import { MockSecurity } from "../src/security";
import { errUserNotExists, errInvalidCredentials } from "../src/errors";
import { GetFavouriteStops } from "../src/usecases"

describe('GetFavouriteStops', () => {
    const user = new User("username", "password", [1, 2, 3])
    const mockReposiotry = new InMemRepository({ [user.username]: user })

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    const invalidToken = "invalid"

    it('when credentails are valid should return stops', async () => {
        var mockSecurity = new MockSecurity({ verifyToken: () => user.username })
        var getFavouriteStops = new GetFavouriteStops(mockReposiotry, mockSecurity)
        expect(await getFavouriteStops.call(token)).to.deep.equals(user.favouriteStops)
    });

    it('when given user is not exists should throw error', async () => {
        var mockSecurity = new MockSecurity({ verifyToken: () => invalidToken })
        var getFavouriteStops = new GetFavouriteStops(mockReposiotry, mockSecurity)
        expect(getFavouriteStops.call(token)).to.be.rejectedWith(errUserNotExists)
    });

    it('when token is not valid should throw error', async () => {
        var mockSecurity = new MockSecurity({ verifyToken: () => { throw new Error(errInvalidCredentials) } })
        var getFavouriteStops = new GetFavouriteStops(mockReposiotry, mockSecurity)
        expect(getFavouriteStops.call(token)).to.be.rejectedWith(errInvalidCredentials)
    });
});