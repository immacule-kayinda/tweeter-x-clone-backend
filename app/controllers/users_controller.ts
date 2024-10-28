import User from '#models/user'
import { createUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async store({ request, auth }: HttpContext) {
    console.log('qkdf')
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return user
  }

  async register({ request, auth }: HttpContext) {
    const { firstname, lastname, email, password, username } = request.only([
      'firstname',
      'lastname',
      'email',
      'password',
      'username',
    ])
    const payload = await createUserValidator.validate({
      firstname,
      lastname,
      email,
      password,
      username: username.toLowerCase(),
    })
    // return payload
    const user = await User.create(payload)
    auth.use('web').login(user)
    return user
  }

  async index({}: HttpContext) {
    const user = User.all()
    return user
  }
}
