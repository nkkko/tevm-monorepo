// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { sei as _sei } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the sei chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 1329
 * Chain Name: Sei Network
 * Default Block Explorer: https://seitrace.com
 * Default RPC URL: https://evm-rpc.sei-apis.com/
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { sei } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: sei,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const sei = createCommon({
	..._sei,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
