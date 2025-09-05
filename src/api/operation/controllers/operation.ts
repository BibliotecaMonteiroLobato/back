/**
 * operation controller
 */

import { factories } from '@strapi/strapi'
import { ClientService } from '../services/ClientService';

export default factories.createCoreController('api::operation.operation', ({ strapi }) => ({
    registerUser(ctx) {
        const client = new ClientService()
        return client.registerUser(ctx)
    }
}));
