// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { syscoinTestnet as _syscoinTestnet } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the syscoinTestnet chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 5700
 * Chain Name: Syscoin Tanenbaum Testnet
 * Default Block Explorer: https://tanenbaum.io
 * Default RPC URL: https://rpc.tanenbaum.io
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { syscoinTestnet } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: syscoinTestnet,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const syscoinTestnet = createCommon({
	..._syscoinTestnet,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
