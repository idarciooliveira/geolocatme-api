import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        username: 'idarciooliveira',
        password: '1234',
        country: 'Angola',
        state: 'Huila',
        isAdmin: true,
        latitude: -14.9344430,
        longitude: 13.5002102
      },
      {
        username: 'miguelsilva',
        password: '1234',
        country: 'Angola',
        state: 'Huila',
        isAdmin: false,
        latitude: -14.9344430,
        longitude: 13.4002102
      },
      {
        username: 'jacintamaria',
        password: '1234',
        country: 'Angola',
        state: 'Luanda',
        isAdmin: false,
        latitude: -8.9041711,
        longitude: 13.2288374
      },
      {
        username: 'monicasumbo',
        password: '1234',
        country: 'Angola',
        state: 'Luanda',
        isAdmin: false,
        latitude: -8.9031711,
        longitude: 13.2188374
      },
      {
        username: 'adilsonvieira',
        password: 'admin',
        country: 'Angola',
        state: 'Luanda',
        isAdmin: true,
        latitude: -8.8139922,
        longitude: 13.2412960
      }
    ])
  }
}
