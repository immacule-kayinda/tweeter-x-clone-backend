import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    firstname: vine.string().trim().minLength(1),
    lastname: vine.string().trim().minLength(1),
    username: vine.string().trim().minLength(1),
    avatar: vine.string().trim().url().optional(),
    email: vine.string().email().trim(),
    password: vine.string().trim().minLength(8),
  })
)
