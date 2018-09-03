import { debuglog } from 'util'

const LOG = debuglog('@mnpjs/test-package-3')

/**
 * test-description
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function testPackage_3(config = {}) {
  const {
    type,
  } = config
  LOG('@mnpjs/test-package-3 called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */