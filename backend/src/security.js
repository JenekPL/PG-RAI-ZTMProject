const secret = "WGTmFQr7H88RaMTpjX3vY8xOgv63XTXg"
const errors = require('./errors')

class Security {
    getToken(username) {
        return jwt.sign({ "sub": username }, secret)
    }
    verifyToken(token) {
        try {
            return jwt.verify(token, secret).sub
        } catch (_) {
            throw new Error(errors.invalidCredentials)
        }
    }
}

class MockSecurity {

    constructor({getToken, verifyToken, decodeToken}) {
        this.getToken = getToken
        this.verifyToken = verifyToken
        this.decodeToken = decodeToken
    }
}

module.exports = { Security, MockSecurity }