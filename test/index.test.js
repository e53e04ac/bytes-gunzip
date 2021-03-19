/*!
 * bytes-gunzip/test/index.test.js
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const stream = require('stream');

const chai = require('chai');

describe('index.js', async () => {

    const { BytesGunzip } = require('../');

    it('coverage', async () => {

        const input = new stream.Readable({
            objectMode: false,
            read: (size) => {
                input.push(Buffer.from('1f8b08000000000000136300008def02d201000000', 'hex'));
                input.push(null);
            }
        });

        const bytesGunzip = BytesGunzip({});
        bytesGunzip.BytesGunzipConstructorOptions();
        bytesGunzip._BytesGunzip();

        const output = new stream.Writable({
            objectMode: false,
            write: (chunk, encoding, callback) => {
                callback();
            }
        });

        await new Promise((resolve, reject) => {
            stream.pipeline([
                input,
                bytesGunzip,
                output
            ], (error) => {
                if (error != null) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

    });

});
