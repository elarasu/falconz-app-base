import Log from '../log';
import * as Utils from '../utils';

declare let global;
test('isBrowser', () => {
  expect(Utils.isBrowser()).toBeFalsy();
});

test('isGlobalPresent config', () => {
  expect(Utils.isGlobalPresent('config')).toBeFalsy();
});
test('isGlobalPresent', () => {
  expect(Utils.isGlobalPresent('konsole')).toBeTruthy();
});
global.konsole = new Log();

test('jsonToAjvSchema no keys', () => {
  const schema1 = {};
  expect(Utils.jsonToAjvSchema(schema1)).toStrictEqual(schema1);
});

test('jsonToAjvSchema no version', () => {
  const schema2 = { a: 5, b: 'hello' };
  expect(Utils.jsonToAjvSchema(schema2)).toStrictEqual(schema2);
});

test('jsonToAjvSchema check version removed', () => {
  const schema3 = { a: 5, b: 'hello', version: 1 };
  const schema3Out = { a: 5, b: 'hello' };
  expect(Utils.jsonToAjvSchema(schema3)).toStrictEqual(schema3Out);
});

test('jsonToAjvSchema check version and primaryKey removed', () => {
  const schema4 = { a: 5, b: 'hello', version: 1, primaryKey: 'a' };
  const schema4Out = { a: 5, b: 'hello' };
  expect(Utils.jsonToAjvSchema(schema4)).toStrictEqual(schema4Out);
});
