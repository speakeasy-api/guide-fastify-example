import fp from 'fastify-plugin'

export default fp(async (fastify) => {
  const DrinkSchema = {
    $id: 'Drink',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Drink name',
        description: 'The name of the drink',
        example: 'Gin and Tonic'
      },
      type: {
        type: 'string',
        enum: [
          'beer',
          'wine',
          'cocktail',
          'mocktail',
          'soft',
          'spirit',
          'other'
        ]
      },
      price: {
        type: 'number',
        title: 'Price',
        description: 'The price of one unit of the drink in US cents.',
        example: 100
      },
      stock: {
        type: 'integer',
        title: 'Stock',
        description: 'The number of units of the drink in stock, only available when authenticated.',
        example: 10
      },
      productCode: {
        type: 'string',
        title: 'Product code',
        description: 'The product code of the drink, only available when authenticated.',
        example: '1234567890'
      }
    },
    required: [
      'name',
      'type',
      'price'
    ]
  }

  fastify.addSchema(DrinkSchema)
})
