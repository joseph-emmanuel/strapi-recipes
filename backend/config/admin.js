module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '722ae6bb2e22444a0acb2b2d23a096c9'),
  },
});
