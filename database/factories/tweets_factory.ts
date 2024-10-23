import Tweet from '#models/tweet'
import factory from '@adonisjs/lucid/factories'

export const TweetFactory = factory
  .define(Tweet, ({ faker }) => ({
    content: faker.lorem.sentence(),
    image: faker.image.urlPicsumPhotos(),
  }))
  .build()
