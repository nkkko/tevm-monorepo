// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { arbitrumSepolia as _arbitrumSepolia } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the arbitrumSepolia chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 421614
 * Chain Name: Arbitrum Sepolia
 * Default Block Explorer: https://sepolia.arbiscan.io
 * Default RPC URL: https://sepolia-rollup.arbitrum.io/rpc
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { arbitrumSepolia } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: arbitrumSepolia,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const arbitrumSepolia = createCommon({
	..._arbitrumSepolia,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
