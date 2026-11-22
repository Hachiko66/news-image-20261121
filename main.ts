// news-image-20261121: entry point copies entry.png to /output/entry.png
import { copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(join(here, 'entry.png'), join(out, 'entry.png'));
