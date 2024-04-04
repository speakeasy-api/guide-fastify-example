export default async function (fastify, opts) {
  const schema = {
    // Speakeasy uses operationId to generate the route name
    operationId: 'getDrink',
    // Speakeasy uses tags to group routes in the documentation and SDKs
    tags: [
      'drinks'
    ],
    params: {
      type: 'object',
      properties: {
        drinkId: {
          type: 'string'
        }
      }
    },
    response: {
      200: {
        // Gets the Drink model added by fastify.addSchema in models/drink.js by referencing the $id property.
        $ref: 'Drink'
      }
    }
  }

  fastify.get('/:drinkId/', { schema }
    , async function (request, reply) {
      const { drinkId } = request.params
      return { id: drinkId, name: 'Example Drink Name', description: 'Example description' }
    })
}
