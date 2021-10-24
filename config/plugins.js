module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'm@coa.dk',
      defaultReplyTo: 'm@coa.dk',
      testAddress: 'm@coa.dk',
    },
  },
  // ...
});
