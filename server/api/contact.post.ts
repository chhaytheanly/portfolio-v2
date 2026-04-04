export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email address',
    })
  }

  if (body['bot-field']) {
    throw createError({
      statusCode: 400,
      message: 'Bot detected',
    })
  }

  return { success: true, message: 'Message received successfully' }
})
