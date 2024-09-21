// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { zkFair as _zkFair } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the zkFair chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 42766
 * Chain Name: ZKFair Mainnet
 * Default Block Explorer: https://scan.zkfair.io
 * Default RPC URL: https://rpc.zkfair.io
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { zkFair } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: zkFair,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const zkFair = createCommon({
	..._zkFair,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
