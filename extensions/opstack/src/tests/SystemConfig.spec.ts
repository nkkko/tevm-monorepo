import { beforeEach, describe, expect, it } from 'bun:test'
import { type L1Client, createL1Client } from '../index.js'

describe('SystemConfig', () => {
	let client: L1Client

	beforeEach(async () => {
		client = createL1Client()
		await client.tevmReady()
	})

	it('should initialize contract correctly', async () => {
		expect(await client.tevmContract(client.op.SystemConfig.read.owner())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.scalar())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.version())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.overhead())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.optimismMintableERC20Factory())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.minimumGasLimit())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.l1StandardBridge())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.batchInbox())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.startBlock())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.batcherHash())).toMatchSnapshot()
		expect(await client.tevmContract(client.op.SystemConfig.read.optimismPortal())).toMatchSnapshot()
	})

	it('can interact with the contract as the owner to change the l2 gas limit', async () => {
		const newGasLimit = 420420420n
		expect(
			await client.tevmContract({
				createTransaction: true,
				from: client.op.SYSTEM_CONFIG_OWNER,
				...client.op.SystemConfig.write.setGasLimit(newGasLimit),
			}),
		).toEqual({
			txHash: '0x995cf9dafcecf867d7a6f3076fc3e02e2dbc824ba40134bb344930b157945ab3',
			createdAddresses: new Set(),
			data: undefined,
			executionGasUsed: 3819n,
			gas: 16773396n,
			logs: [
				{
					address: '0x229047fed2591dbec1eF1118d64F7aF3dB9EB290',
					data: '0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000190f1b44',
					topics: [
						'0x1d2b0bda21d56b8bd12d4f94ebacffdfb35f5e226f84b461103bb8beab6353be',
						'0x0000000000000000000000000000000000000000000000000000000000000000',
						'0x0000000000000000000000000000000000000000000000000000000000000002',
					],
				},
			],
			rawData: '0x',
			selfdestruct: new Set(),
		})
		expect(
			await client.tevmContract({
				...client.op.SystemConfig.read.gasLimit(),
			}),
		).toHaveProperty('data', newGasLimit)
	})
})
