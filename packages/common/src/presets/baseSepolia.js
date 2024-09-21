// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { baseSepolia as _baseSepolia } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the baseSepolia chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 84532
 * Chain Name: Base Sepolia
 * Default Block Explorer: https://sepolia.basescan.org
 * Default RPC URL: https://sepolia.base.org
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { baseSepolia } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: baseSepolia,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const baseSepolia = createCommon({
	..._baseSepolia,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
