const crypto = require('crypto')

const secretKey = crypto.randomBytes(32).toString('hex')

console.log("jWT Secret key:",secretKey)