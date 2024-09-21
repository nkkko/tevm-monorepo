// This file was auto-generated by __GENERATE_CHAIN_PRESETS__.js. Do not edit manually.

import { wanchain as _wanchain } from 'viem/chains'
import { createCommon } from '../createCommon.js'

/**
 * Creates a common configuration for the wanchain chain.
 * @type {import('../Common.js').Common}
 * @description
 * Chain ID: 888
 * Chain Name: Wanchain
 * Default Block Explorer: https://wanscan.org
 * Default RPC URL: https://gwan-ssl.wandevs.org:56891
 * @example
 * import { createMemoryClient } from 'tevm'
 * import { wanchain } from 'tevm/common'
 * import { http } from 'tevm'
 *
 * const client = createMemoryClient({
 *   common: wanchain,
 *   fork: {
 *     transport: http({ url: 'https://example.com' })({})
 *   },
 * })
 */
export const wanchain = createCommon({
	..._wanchain,
	loggingLevel: 'warn',
	eips: [],
	hardfork: 'cancun',
})
