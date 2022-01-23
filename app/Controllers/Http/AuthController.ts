import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import User from 'App/Models/User';
import Jwt from 'jsonwebtoken'

export default class AuthController {
    
    public async authenticate({ request, response}: HttpContextContract){

        const { username, password } = request.body();
 
        const user = await User.findBy('username', username);
 
        if(!user){
             return response.status(401).json({ message: 'Nome de usuario ou senha incorretos'})
        }
 
        if(!await Hash.verify(user.password, password)){
             return response.status(401).json({ message: 'Nome de usuario ou senha incorretos'})
        }

        const token = Jwt.sign({ 
            user: {
                username: user.username,
                isAdmin: user.isAdmin,
                latitude: user.latitude,
                longitude: user.longitude,
                country: user.country,
                state: user.state
            }

         }, 'MySuperSecretPassowrd');
 
        response.json(token);
 
    }
}
