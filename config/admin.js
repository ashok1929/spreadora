module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3cc4944316e171566c7f4a935e9ced9'),
  },
});
