// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { moonbeamDev as _moonbeamDev } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the moonbeamDev chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 1281
 * Chain Name: Moonbeam Development Node
 * Default Block Explorer: Not specified
 * Default RPC URL: http://127.0.0.1:9944
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { moonbeamDev } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: moonbeamDev,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const moonbeamDev = createCommon({
	..._moonbeamDev,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
