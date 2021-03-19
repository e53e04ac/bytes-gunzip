/*!
 * bytes-gunzip/src/index.jss
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

'use strict';

const zlib = require('zlib');

const { BytesGunzip } = (() => {

    /** @typedef BytesGunzipConstructorOptions @type {import('../types').BytesGunzipConstructorOptions} */
    /** @typedef _BytesGunzip @type {import('../types')._BytesGunzip} */
    /** @typedef BytesGunzip @type {import('../types').BytesGunzip} */
    /** @typedef BytesGunzipConstructor @type {import('../types').BytesGunzipConstructor} */

    /** @type {BytesGunzipConstructor}  */
    const BytesGunzip = (options) => {

        /** @type {BytesGunzipConstructorOptions}  */
        const _options = {};
        _options.flush = options.flush;
        _options.finishFlush = options.finishFlush;
        _options.chunkSize = options.chunkSize;
        _options.windowBits = options.windowBits;
        _options.info = options.info;
        _options.maxOutputLength = options.maxOutputLength;

        /** @type {_BytesGunzip}  */
        const _it = {};

        /** @type {BytesGunzip}  */
        // @ts-ignore
        const it = zlib.createGunzip({
            flush: _options.flush,
            finishFlush: _options.finishFlush,
            chunkSize: _options.chunkSize,
            windowBits: _options.windowBits,
            info: _options.info,
            maxOutputLength: _options.maxOutputLength
        });
        it.BytesGunzipConstructorOptions = () => {
            return _options;
        };
        it._BytesGunzip = () => {
            return _it;
        };
        return it;

    };
    return { BytesGunzip };

})();

module.exports = { BytesGunzip };
