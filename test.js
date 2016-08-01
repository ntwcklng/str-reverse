import test from 'ava';
import strReverse from './';

const originalStr = 'hello';
const reversedStr = 'olleh';

test('Reverse a String', t => {
  t.is(reversedStr, strReverse(originalStr))
});