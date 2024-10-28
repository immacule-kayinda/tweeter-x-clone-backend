import vine from '@vinejs/vine'

export const tweetValidator = vine.object({
  content: vine.string().minLength(0).minLength(280),
  image: vine.string().url().optional(),
  user_id: vine.number(), // assuming user_id is a foreign key in the tweets table
})
