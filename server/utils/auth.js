const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'superbigsecret';
const expiration = '2h';

module.export = {
    authMiddleware: function (req, res, next) {
        let token = req.query.token || req.headers.authorization;
        if (req.headers.authorization) {
            token = token.split(' ').pop.trim();
        }
        if (!token) {
            return res.status(400).json({message: 'You are not logged in!'})
        }

        try {
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
            return res.status(400).json({message: 'invalid data'})
        }

        next();
    },
    signToken: function ({email, _id}) {
        const payload = {email, _id};
        return jwt.sign({ data: payload}, secret, {expiresIn: expiration});
    },

};