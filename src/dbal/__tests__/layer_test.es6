/**
 * Copyright (c) 2017-present, blockcollider.org developers, All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const { DatabaseLayer } = require('../')
const PersistenceRocksDb = require('../../persistence').RocksDb

describe('Layer', () => {
  let db = null

  beforeEach((done) => {
    const dbPath = `_testData/${Date.now()}`
    db = new PersistenceRocksDb(dbPath)

    db
      .open()
      .then((res) => {
        expect(true).toEqual(true)
        done()
      })
      .catch(e => {
        console.trace(e)
        expect(e).toEqual(true)
      })
  })

  afterEach(() => {
    db
      .close()
      .then(() => {
        expect(true).toEqual(true)
      })
      .catch(e => {
        expect(e).toEqual(true)
      })
  })

  it('save object by key', () => {
    expect(42).toEqual(42)

    const layer = new DatabaseLayer(db)
    layer
      .putObject({
        type: 1,
        collection: 'bc',
        key: 'test',
        data: '1'
      })
      .then(response => {
        expect(true).toEqual(true)
      })
      .catch(e => {
        console.trace(e)
        expect(e).toEqual(true)
      })
  })

  it('can save object', () => {
    const block = {
      'hash': '6f641871680978619176212f0000a40d8d0ae784ad35918ce677a5111a776cf9',
      'previousHash': '5105a4cffbe8b107d61b4e58d897e707be7c0578b7e7db6a811fb39cf2a2bd57',
      'beforeTargetHeight': 1000066,
      'beforeTargetSig': '',
      'height': 1,
      'miner': '0x083cc41690bbd89d33f3b2e71b9012904426eb0c',
      'difficulty': 141129464479256,
      'timestamp': 0,
      'merkleRoot': 'b277537249649f9e7e56d549805ccfdec56fddd6153c6bf4ded85c3e072ccbdf',
      'chainRoot': 'b4816d65eabac8f1a143805ffc6f4ca148c4548e020de3db21207a4849ea9abe',
      'nonce': 0,
      'txCount': 0,
      'transactionsList': [],
      'childBlockchainCount': 5,
      'childFingerprintsHash': '86120e6b6c3bcc31204ebb7f7fdacf62cbcc1408191092ee2f8f5b3cc5082db1',
      'childBlockHeadersList': [
        {
          'blockchain': 'btc',
          'hash': '00000000000c4df039d8ba791eead74ca301e27d806bd6559c1087abf25c9b1f',
          'previousHash': '00000000005c22d199706df1c38b38d76f8401920dcbe91edf3417f8847da707',
          'merkleRoot': '10ad2d4d40a763d8dcd118d3d6494a986c43c28fab8fae23d795d3271af14083',
          'confirmations': 0,
          'height': 74692,
          'timestamp': 1281961488
        },
        {
          'blockchain': 'eth',
          'hash': '87b2bc3f12e3ded808c6d4b9b528381fa2a7e95ff2368ba93191a9495daa7f50',
          'previousHash': '4985f5ca3d2afbec36529aa96f74de3cc10a2a4a6c44f2157a57d2c6059a11bb',
          'merkleRoot': '62321951008868',
          'confirmations': 0,
          'height': 1920001,
          'timestamp': 1400000000
        },
        {
          'blockchain': 'lsk',
          'hash': '7234275607611561282',
          'previousHash': '13332666788283026871',
          'merkleRoot': 'genesis_7',
          'confirmations': 0,
          'height': 3,
          'timestamp': 1400000000
        },
        {
          'blockchain': 'wav',
          'hash': '54dS4KPRoKzccHv6sXYPaDNnxLL9n91LiQkDA6BkUi9tc7SJaUAXiaWZpsjrnTDYESDuqjtxjsqd34D6acyAMw7a',
          'previousHash': '62ruZoatk3Wvs1pkWH1VB2utacPSyYdCfdAiMaYygJn6jUFGyGVg9F5i1SqDjimJvGhi8FhyT7LuRQusbHRXMnjp',
          'merkleRoot': '3PBWXDFUc86N2EQxKJmW8eFco65xTyMZx6J',
          'confirmations': 0,
          'height': 3,
          'timestamp': 1400000000
        },
        {
          'blockchain': 'neo',
          'hash': 'bf638e92c85016df9bc3b62b33f3879fa22d49d5f55d822b423149a3bca9e574',
          'previousHash': 'd782db8a38b0eea0d7394e0f007c61c71798867578c77c387c08113903946cc9',
          'merkleRoot': 'afa183a1579babc4d55f5609c68710954c27132d146427fb426af54295df0842',
          'confirmations': 0,
          'height': 2,
          'timestamp': 1400000000
        }
      ]
    }
  })
})
