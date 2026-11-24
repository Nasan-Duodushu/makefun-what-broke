// Say What Actually Broke: one line of error copy that tells the brutal
// truth about the failure and makes the user laugh on the way.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'We lost your changes: autosave faithfully saved them to a server we retired in March, which is exactly as much our fault as it sounds.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
