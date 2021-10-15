import { Log, Util, Logger } from '../build/module/index.js';
// import { Logger } from '../build/module/lib/logger.js';
import consola from 'consola';

console.log(!Util.isBrowser);
console.log(Util.isGlobalPresent('konsole'));
global.konsole = consola;
//global.konsole = new Log();
console.log(Util.isGlobalPresent('konsole'));
// console.log(global);
konsole.log('log statement', 'l');
konsole.debug('debug statement', 'd', { a: 45 });
konsole.info('info statement');
konsole.error('error statement');
console.error('hello', 'a', { t: 45 });
