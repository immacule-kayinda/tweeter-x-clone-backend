import Tweet from '#models/tweet'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker'

export default class extends BaseSeeder {
  async run() {
    await Tweet.createMany(
      Array(400)
        .fill('')
        .map(() => {
          return {
            content: faker.lorem.paragraph(),
            image: faker.image.avatar(),
            userId: faker.number.int({ min: 1, max: 25 }),
          }
        })
    )
  }
}
