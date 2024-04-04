import fp from 'fastify-plugin'
import swagger from '@fastify/swagger'

/**
 * A Fastify plugin for serving Swagger (OpenAPI v2) or OpenAPI v3 schemas, which are
 * automatically generated from your route schemas, or from an existing
 * Swagger/OpenAPI schema.
 *
 * @see https://github.com/fastify/fastify-swagger
 */
export default fp(async (fastify) => {
  fastify.register(swagger, {
    // Use `openapi` key to specify an OpenAPI v3 document
    openapi: {
      info: {
        title: 'Speakeasy Bar API',
        description: 'This is a sample API for Speakeasy Bar.',
        termsOfService: 'http://example.com/terms/',
        contact: {
          name: 'Speakeasy Bar Support',
          url: 'http://www.example.com/support',
          email: 'support@example.com'
        },
        license: {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        },
        version: '1.0.1'
      },
      tags: [{
        name: 'drinks',
        description: 'Drink related end-points',
        externalDocs: {
          description: 'Find out more',
          url: 'http://swagger.io'
        }
      }],
      /**
      * Speakeasy OpenAPI extension to add retries to generated SDKs
      * @see https://speakeasyapi.dev/docs/customize-sdks/retries/
      */
      'x-speakeasy-retries': {
        strategy: 'backoff',
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          maxElapsedTime: 3600000,
          exponent: 1.5
        },
        statusCodes: ['5XX'],
        retryConnectionErrors: true
      },
      // Speakesy requires at least one server in the OpenAPI document
      servers: [
        {
          url: 'http://localhost',
          description: 'Development server'
        }
      ]
    },
    refResolver: {
      /**
       * This function is called to generate keys for references found in the schema.
       * @see https://github.com/fastify/fastify-swagger#managing-your-refs
       */
      buildLocalReference (json, baseUri, fragment, i) {
        return json.$id || `id-${i}`
      }
    }
  })
})
