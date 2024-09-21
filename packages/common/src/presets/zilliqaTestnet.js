// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { zilliqaTestnet as _zilliqaTestnet } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the zilliqaTestnet chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 33101
 * Chain Name: Zilliqa Testnet
 * Default Block Explorer: https://evmx.testnet.zilliqa.com
 * Default RPC URL: https://dev-api.zilliqa.com
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { zilliqaTestnet } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: zilliqaTestnet,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const zilliqaTestnet = createCommon({
	..._zilliqaTestnet,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
