'use strict';

/**
 * delegacia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::delegacia.delegacia');
