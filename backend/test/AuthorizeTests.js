import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised);

import { User } from "../src/entities"
import { InMemRepository } from "../src/repositories"
import { MockSecurity } from "../src/security"
import { GetToken } from "../src/usecases"
import { errUserNotExists } from "../src/errors"

describe('Authorize', () => {
    const user = new User("username", "password", {})
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    it('when username and password are valid should return token', async () => {
        var mockReposiotry = new InMemRepository({ [user.username]: user })
        var mockSecurity = new MockSecurity({ getToken: () => token })
        var getToken = new GetToken(mockReposiotry, mockSecurity)
        expect(await getToken.call(user.username, user.password)).to.equals(token)
    });

    it('when user is not in repository should throw exception', async () => {
        let mockRepository = new InMemRepository()
        var mockSecurity = new MockSecurity({ getToken: () => token })
        let getToken = new GetToken(mockRepository, mockSecurity)
        expect(getToken.call(user.username, user.password)).to.be.rejectedWith(errUserNotExists)
    });
});