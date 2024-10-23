import Tweet from '#models/tweet'
import type { HttpContext } from '@adonisjs/core/http'

export default class TweetsController {
  async index({}: HttpContext) {
    return await Tweet.all()
  }

  async store({ request }: HttpContext) {
    const { content, image } = request.only(['image', 'content'])
    return await Tweet.create({ content, image })
  }
}
