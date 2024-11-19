// build.js

const fs = require('fs');
const path = require('path');
const Terser = require('terser');
const { rollup } = require('rollup');
const babel = require('@rollup/plugin-babel').default;

// Input file path
const inputFile = path.resolve(__dirname, '../src/createnotifications.js');

// Rollup configuration
async function build() {
  try {
    // Step 1: Bundle with Rollup
    const bundle = await rollup({
      input: inputFile,
      plugins: [babel({ babelHelpers: 'bundled' })],
    });

    // Step 2: Create ESM (notifications.esm.js)
    await bundle.write({
      file: path.resolve(__dirname, '../dist/notifications.esm.js'),
      format: 'esm',
    });

    // Step 3: Minify the output
    const { code } = await Terser.minify(await fs.promises.readFile(path.resolve(__dirname, '../dist/notifications.esm.js'), 'utf8'));

    // Step 4: Write minified output to notifications.min.js
    await fs.promises.writeFile(path.resolve(__dirname, '../dist/notifications.min.js'), code);
    
    console.log('Build complete!');
  } catch (error) {
    console.error('Build failed:', error);
  }
}

build();
