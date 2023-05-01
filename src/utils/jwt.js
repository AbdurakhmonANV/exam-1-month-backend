import jwt from 'jsonwebtoken'

export default {
  sign: (payload) => jwt.sign(payload, 'abdu'),
  verify: (token) => jwt.verify(token, 'abdu'),
};