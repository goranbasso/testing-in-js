import { rest } from 'msw'

export const handlers = [
  rest.get('/users', (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        {
          id: 1,
          name: 'Anders'
        },
        {
          id: 2,
          name: 'Gøran'
        }
      ])
    )
  }),
]