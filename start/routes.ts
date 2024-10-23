/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const TweetsController = () => import('#controllers/tweets_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.get('api/tweets', [TweetsController, 'index'])
router.put('api/tweets', [TweetsController, 'store'])
