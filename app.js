import path from 'path'
import AutoLoad from '@fastify/autoload'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Pass --options via CLI arguments in command to enable these options.
export const options = {}

export default async function (fastify, opts) {
  // This loads all plugins defined in the models directory
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'models'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in the plugins directory
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in the routes directory
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
