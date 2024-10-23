import Tweet from '#models/tweet'
import User from '#models/user'
import Factory from '@adonisjs/lucid/factories'

export const TweetFactory = Factory.define(Tweet, ({ faker }) => ({
  content: faker.lorem.sentence(),
  image: faker.image.urlPicsumPhotos(),
})).build()

export const UserFactory = Factory.define(User, ({ faker }) => {
  const firstname = faker.person.firstName()
  const lastname = faker.person.lastName()
  return {
    firstname,
    lastname,
    username: faker.internet.userName({ firstName: firstname, lastName: lastname }),
    email: faker.internet.email(),
    password: faker.internet.password(),
    isVerified: Math.random() > 0.8,
    avatar: Math.random() > 0.5 ? null : faker.image.avatar(),
  }
})
  .relation('tweets', () => Tweet)
  .build()
