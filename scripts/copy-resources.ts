import * as shell from 'shelljs';
import * as fs from 'fs';

const out = 'dist';
if (!fs.existsSync(out)) {
  fs.mkdirSync(out);
  fs.mkdirSync(out + '/config');
}

shell.cp('-R', 'src/config/*.yml', 'dist/config');
