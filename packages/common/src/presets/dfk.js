// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { dfk as _dfk } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the dfk chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 53935
 * Chain Name: DFK Chain
 * Default Block Explorer: https://subnets.avax.network/defi-kingdoms
 * Default RPC URL: https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { dfk } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: dfk,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const dfk = createCommon({
	..._dfk,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
