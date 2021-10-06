import test from 'ava';

import Log from '../log';

const konsole = new Log();

test('log - check with empty params', (t) => {
  konsole.log();
  t.pass();
});
