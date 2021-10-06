import Log from '../build/module/lib/log.js';
import consola from 'consola';

// const konsole = new Log();
const konsole = consola;
konsole.log('log statement', 'l');
konsole.debug('debug statement', 'd', { a: 45 });
konsole.info('info statement');
konsole.error('error statement');
console.error('hello', 'a', { t: 45 });
