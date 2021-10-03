import Log from '../build/module/lib/log.js';

const konsole = new Log();
// const konsole = console;
konsole.log('log statement', 'l');
konsole.debug('debug statement', 'd', { a: 45 });
konsole.info('info statement');
konsole.error('error statement');
console.error('hello', 'a', { t: 45 });
