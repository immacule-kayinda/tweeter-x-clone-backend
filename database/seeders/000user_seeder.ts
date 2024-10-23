import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    await User.createMany(
      Array(25)
        .fill('')
        .map(() => {
          const firstname = faker.person.firstName()
          const lastname = faker.person.lastName()
          return {
            firstname,
            lastname,
            avatar: faker.image.avatar(),
            email: faker.internet.email(),
            isVerified: faker.datatype.boolean(),
            password: faker.internet.password(),
            username: faker.internet.userName(),
          }
        })
    )
  }
}
