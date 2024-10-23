import { TweetFactory } from '#database/factories/tweets_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    TweetFactory.createMany(50 * (Math.random() * 1000))
  }
}
