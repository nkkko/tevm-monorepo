// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { hedera as _hedera } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the hedera chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 295
 * Chain Name: Hedera Mainnet
 * Default Block Explorer: https://hashscan.io/mainnet
 * Default RPC URL: https://mainnet.hashio.io/api
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { hedera } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: hedera,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const hedera = createCommon({
	..._hedera,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
