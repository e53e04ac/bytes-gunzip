/*!
 * bytes-gunzip/types/index.d.ts
 * e53e04ac <e53e04ac@gmail.com>
 * MIT License
 */

import stream from 'stream';

type BytesGunzipConstructorOptions = {
    flush?: number;
    finishFlush?: number;
    chunkSize?: number;
    windowBits?: number;
    info?: boolean;
    maxOutputLength?: number;
};

type _BytesGunzip = {

};

type BytesGunzip = stream.Transform & {
    BytesGunzipConstructorOptions: {
        (): BytesGunzipConstructorOptions;
    };
    _BytesGunzip: {
        (): _BytesGunzip;
    };
};

type BytesGunzipConstructor = {
    (options: BytesGunzipConstructorOptions): BytesGunzip;
};

export const BytesGunzip: BytesGunzipConstructor;
