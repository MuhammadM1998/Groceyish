module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/newsletter',
      handler: 'newsletter.sendEmail',
    },
  ],
};
