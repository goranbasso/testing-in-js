import { rest } from 'msw'

export const handlers = [
  rest.get('/users', (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        {
          name: 'Anders'
        },
        {
          name: 'Gøran'
        }
      ])
    )
  }),
]