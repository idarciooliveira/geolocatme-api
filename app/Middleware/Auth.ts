import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Jwt from 'jsonwebtoken'

export default class Auth {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL

    const authToken = request.header('authorization');

    if(!authToken) return response.status(401).json({message: 'Nao Authorizado'})

    const parts = authToken.split(' ');

    if(!parts)  return response.status(401).json({message: 'Nao Authorizado'})

    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return response.status(404).json({message: 'Not Authorizateed!'});
    }

    try {
        Jwt.verify(token, 'MySuperSecretPassowrd');
        await next();

    } catch (error) {
        return response.status(404).json({message: 'Not Authorizateed!'});
    }

  }
}
