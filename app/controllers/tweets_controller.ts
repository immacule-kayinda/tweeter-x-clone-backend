import Tweet from '#models/tweet'
import { cuid } from '@adonisjs/core/helpers'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class TweetsController {
  async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    return await Tweet.query().preload('user').paginate(page, 20)
  }

  async store({ request, response }: HttpContext) {
    const tweetImage = request.file('tweetImage', {
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg'],
    })
    const { content } = request.only(['image', 'content'])
    if (tweetImage) {
      if (!tweetImage?.isValid && tweetImage) {
        console.log('imageError')
        return response.badRequest({ errors: tweetImage?.errors })
      }
      await tweetImage.move(app.makePath('storage/uploads/'), {
        name: `${cuid()}.${tweetImage.extname}`,
      })
      return await Tweet.create({ content, image: tweetImage.fileName, userId: 1 })
    }

    console.log('after if')
    const tweet = await Tweet.create({ content, userId: 1 })
    await tweet.load('user')
    return tweet
  }

  async indexByUsername({ request, params }: HttpContext) {
    const page = request.input('page', 1)
    const { username } = params
    return await Tweet.query()
      .whereHas('user', (userQuery) => {
        userQuery.where('username', username)
      })
      .preload('user') // Assure-toi de précharger les infos de l'utilisateur
      .paginate(page, 20)
  }

  async show({ request }: HttpContext) {
    const tweetId = request.param('tweetId')
    return await Tweet.query().where('id', tweetId).preload('user')
  }
}
