'use strict';

/**
 * newsletter-user service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newsletter-user.newsletter-user');
