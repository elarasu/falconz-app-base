import Log from '../build/module/lib/log.js';
// import { Logger } from '../build/module/lib/logger.js';
import { isBrowser, isGlobalPresent } from '../build/module/lib/utils.js';
import consola from 'consola';

console.log(!isBrowser);
console.log(isGlobalPresent('konsole'));
// global.konsole = consola;
global.konsole = new Log();
console.log(isGlobalPresent('konsole'));
// console.log(global);
konsole.log('log statement', 'l');
konsole.debug('debug statement', 'd', { a: 45 });
konsole.info('info statement');
konsole.error('error statement');
console.error('hello', 'a', { t: 45 });
