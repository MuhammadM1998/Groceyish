'use strict';

module.exports = {
  sendEmail: async (ctx) => {
    const recipientEmail = { to: ctx.request.query.email };
    const isNewSubscriber = ctx.request.query.isNewSubscription;

    strapi.log.debug(
      `Trying to send a Newsletter email to ${recipientEmail.to}`
    );
    try {
      // Selecting the proper email template based on the `isNewSubscriber` query
      let emailOptions;
      if (isNewSubscriber === 'true') {
        strapi.log.debug(`New Subscriber Email`);
        emailOptions = {
          templateReferenceId: 1,
        };
      } else if (isNewSubscriber === 'false') {
        strapi.log.debug(`Old Subscriber Email`);
        emailOptions = {
          templateReferenceId: 2,
        };
      } else {
        strapi.log.debug(`Error Email`);
        emailOptions = {
          templateReferenceId: 3,
        };
      }

      // Sending the selected email template using the `email-designer` plugin
      await strapi
        .plugin('email-designer')
        .service('email')
        .sendTemplatedEmail(recipientEmail, emailOptions);

      strapi.log.debug(`Newsletter email sent to ${recipientEmail.to}`);
      ctx.send({
        status: true,
        message: 'Newsletter email sent successfuly.',
      });
    } catch (err) {
      strapi.log.error(
        `Error sending newsletter email to ${recipientEmail.to}`,
        err
      );
      ctx.send({
        status: false,
        message: 'Failed to send newsletter email.',
      });
    }
  },
};
