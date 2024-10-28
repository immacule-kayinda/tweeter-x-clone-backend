/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const TweetsController = () => import('#controllers/tweets_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router
  .group(() => {
    router.get('api/tweets', [TweetsController, 'index'])
    router.get('api/tweets/:tweetId', [TweetsController, 'show'])
    router.get('api/tweets/user/:username', [TweetsController, 'indexByUsername'])
    router.post('api/tweets', [TweetsController, 'store'])
  })
  .use(middleware.auth())

router.post('/api/users/login', [UsersController, 'store'])
router.post('/api/users/register', [UsersController, 'register']).use(middleware.guest())
