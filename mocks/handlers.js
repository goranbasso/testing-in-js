import { rest } from 'msw'

const users = [
  {
    id: 1,
    name: 'Anders',
    username: 'andbre'
  },
  {
    id: 2,
    name: 'Gøran',
    username: 'gorbas'
  },
  {
    id: 3,
    name: 'Sigve',
    username: 'siggod'
  },
  {
    id: 4,
    name: 'Frode',
    username: 'frowar'
  }
]

export const handlers = [
  rest.get('/users', (request, response, context) => {
    return response(
      context.status(200),
      context.json(users)
    )
  }),
  rest.get('/apps', (request, response, context) => {
    return response(
      context.status(200),
      context.json([
        {
          name: 'Bildeleringen'
        },
        {
          name: 'SAGA'
        },
        {
          name: 'MinSide'
        },
        {
          name: 'SpareBank1 Kredittkort'
        },
      ])
    )
  }),
  rest.post('/users', (request, response, context) => {
    users.push(JSON.parse(request.body))
    return response(
      context.status(200)
    )
  })
]