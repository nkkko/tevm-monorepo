// This file is originally adapted from ethereumjs and thus carries the same license
import type { VerkleStateDiff } from './VerkleStateDiff.js'
import type { VerkleProof } from './VerkleProof.js'

/**
 * Experimental, object format could eventual change.
 * An object that provides the state and proof necessary for verkle stateless execution
 * */
export interface VerkleExecutionWitness {
	/**
	 * An array of state diffs.
	 * Each item corresponding to state accesses or state modifications of the block.
	 * In the current design, it also contains the resulting state of the block execution (post-state).
	 */
	stateDiff: VerkleStateDiff[]
	/**
	 * The verkle proof for the block.
	 * Proves that the provided stateDiff belongs to the canonical verkle tree.
	 */
	verkleProof: VerkleProof
}
