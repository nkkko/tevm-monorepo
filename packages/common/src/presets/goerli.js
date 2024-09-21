// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { goerli as _goerli } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the goerli chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 5
 * Chain Name: Goerli
 * Default Block Explorer: https://goerli.etherscan.io
 * Default RPC URL: https://rpc.ankr.com/eth_goerli
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { goerli } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: goerli,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const goerli = createCommon({
	..._goerli,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
