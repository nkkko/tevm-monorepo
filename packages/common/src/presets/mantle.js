// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { mantle as _mantle } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the mantle chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 5000
 * Chain Name: Mantle
 * Default Block Explorer: https://mantlescan.xyz/
 * Default RPC URL: https://rpc.mantle.xyz
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { mantle } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: mantle,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const mantle = createCommon({
	..._mantle,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
