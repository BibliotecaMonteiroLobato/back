const utils = require("@strapi/utils");
const { ApplicationError } = utils.errors;

import { randomUUID } from "crypto";
import { RegisterUserDTO } from "../dto/RegisterUserDTO";


class ClientService {

    async registerUser (ctx) {
        return strapi.db.transaction(async(trx) => {
            try {

                const data : RegisterUserDTO = ctx.request.body

                if (!data) {
                    throw new ApplicationError("Corpo da requisição esperado")
                }

                const newUser = await strapi.documents(
                    'plugin::users-permissions.user'
                ).create({
                    data: {
                        ...data,
                        password: randomUUID(),
                        provider: 'local',
                        confirmed: true,
                        blocked: false
                    }
                })

                return newUser

            } catch (err) {
                console.log(err)
                throw new ApplicationError(
                    err instanceof ApplicationError ? err.message : "Erro ao cadastrar usuário, tente novamente"
                )
            }
        })
    }

}

export { ClientService }