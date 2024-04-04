export default async function (fastify, opts) {
  fastify.get('/', {
    schema: {
      operationId: 'getRoot',
      tags: [
        'root'
      ],
      response: {
        200: {
          type: 'object',
          properties: {
            root: {
              type: 'boolean'
            }
          }
        }
      }
    }
  }, async function (request, reply) {
    return { root: true }
  })
}
