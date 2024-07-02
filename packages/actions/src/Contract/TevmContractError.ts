import type { TevmCallError } from '../Call/TevmCallError.js'

/**
 * TEVM Contract Error type.
 *
 * This type represents all errors that can occur during a TEVM contract call.
 * It extends from the `TevmCallError` type, inheriting all possible call errors.
 *
 * @example
 * ```typescript
 * import { createClient } from 'viem'
 * import { contractHandler } from 'tevm/actions'
 * import { Abi } from 'viem/utils'
 * import { TevmContractError } from 'tevm/errors'
 *
 * const client = createClient({ transport: http('https://mainnet.optimism.io')({}) })
 *
 * try {
 *   const contractCall = contractHandler(client)
 *   const result = await contractCall({
 *     abi: [...], // ABI array
 *     functionName: 'myFunction',
 *     args: [arg1, arg2],
 *     to: '0x123...',
 *     from: '0x123...',
 *     gas: 1000000n,
 *     gasPrice: 1n,
 *     skipBalance: true,
 *   })
 * } catch (error) {
 *   const typedError = error as TevmContractError
 *   console.error('Contract call failed with error:', typedError)
 * }
 * ```
 *
 * @see {@link TevmCallError}
 */
export type TevmContractError = TevmCallError
