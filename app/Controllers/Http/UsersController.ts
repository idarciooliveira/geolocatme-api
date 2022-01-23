import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {

   public async index({ response}: HttpContextContract){
       const users = await User.all();

       const serializeUsers = users.map(user=>{
           return {
               username: user.username,
               country: user.country,
               state: user.state,
               latitude: user.latitude,
               longitude: user.longitude,
           }
       })
       response.json(serializeUsers);
   }

   public async register({ request, response}: HttpContextContract){

        const { username } = request.body();

        if(await User.findBy('username',username)){
            return response.status(400).json({
                message: 'Nome de usuario ja existe, tente outro!'
            })
        }

       const user = await User.create({ ...request.body()});

       response.json(user);
   }

}
