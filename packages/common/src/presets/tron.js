// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { tron as _tron } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the tron chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 728126428
 * Chain Name: Tron
 * Default Block Explorer: https://tronscan.org
 * Default RPC URL: https://api.trongrid.io/jsonrpc
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { tron } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: tron,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const tron = createCommon({
	..._tron,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
