import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss';
import image from '@rollup/plugin-image';

// https://medium.com/@martin_hotell/typescript-library-tips-rollup-your-types-995153cc81c7


const sassOptions = {
    processor: () => postcss([autoprefixer({ overrideBrowserslist: 'Edge 18' })]),

}

const plugins = [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    scss({ insert: true }),
    image(),
    terser(),
];

const pkg = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib',
            exports: 'auto',
        },
        {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
            exports: 'auto',
        },
    ],
    plugins,
};
