const secret = "WGTmFQr7H88RaMTpjX3vY8xOgv63XTXg"

import { errInvalidCredentials } from './errors'

export class Security {
    getToken(username) {
        return jwt.sign({ "sub": username }, secret)
    }
    verifyToken(token) {
        try {
            return jwt.verify(token, secret).sub
        } catch (_) {
            throw new Error(errInvalidCredentials)
        }
    }
}

export class MockSecurity {

    constructor({getToken, verifyToken, decodeToken}) {
        this.getToken = getToken
        this.verifyToken = verifyToken
        this.decodeToken = decodeToken
    }
}

