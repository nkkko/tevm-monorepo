// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { iotaTestnet as _iotaTestnet } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the iotaTestnet chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 1075
 * Chain Name: IOTA EVM Testnet
 * Default Block Explorer: https://explorer.evm.testnet.iotaledger.net
 * Default RPC URL: https://json-rpc.evm.testnet.iotaledger.net
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { iotaTestnet } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: iotaTestnet,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const iotaTestnet = createCommon({
	..._iotaTestnet,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
