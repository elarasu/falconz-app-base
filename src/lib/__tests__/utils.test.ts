import * as Utils from '../utils';
import Log from '../log';
declare var global;
test('isBrowser', () => {
  expect(Utils.isBrowser()).toBeFalsy();
});

test('isGlobalPresent config', () => {
  expect(Utils.isGlobalPresent('config')).toBeFalsy();

});
test('isGlobalPresent', () => {
  expect(Utils.isGlobalPresent('konsole')).toBeTruthy();
})
global.konsole = new Log();
