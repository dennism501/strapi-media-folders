module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7e63b82e28107d335bc0c2f736c62c20'),
  },
});
