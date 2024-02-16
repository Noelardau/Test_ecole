

const secret = "s3c3retK3y"
// exports.secret = secret ;

/** RETURN TOKEN */
const setJwt = function ( payload, options = null ) {
    try {
        const jwt = require('jsonwebtoken');
        const defaultOptions = {
            algorithm: 'HS256'
        };
        const optionsFinales = Object.assign({}, defaultOptions, options);
        const token = jwt.sign(payload, secret, optionsFinales);
        return token;  
    } catch (error) {
        throw new Error(error.message);
    }
}

/**
 * A VERIFIER SI NON NULL => RETURN PAYLOAD
 * @param {*} token 
 * @returns 
 */
const decodeJwt = function (token) {
    const jwt = require('jsonwebtoken');
  
    try {
      const payload = jwt.verify(token, secret);
      return payload;

    } catch (error) {
      return null;
    }
  }
  

  exports.decodeJwt = decodeJwt;
  exports.setJwt = setJwt