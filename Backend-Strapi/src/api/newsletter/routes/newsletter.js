module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/newsletter',
      handler: 'newsletter.sendEmail',
    },
  ],
};
