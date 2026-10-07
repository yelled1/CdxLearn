import test from 'node:test';
import assert from 'node:assert/strict';
import { classifyFood } from '../lib/foods.js';

for (const [input, status] of [
  ['apple', 'not-junk'], ['chips', 'junk'], ['soda', 'junk'],
  ['   ', 'empty'], ['', 'empty'], ['  APPLE  ', 'not-junk'],
  ['potato   chips', 'junk'], ['crisps', 'junk'],
  ['apple pie', 'uncertain'], ['something unfamiliar', 'uncertain'],
  ['pizza', 'uncertain'], ['salad', 'uncertain'], ['plain yogurt', 'not-junk'],
  ['greek yogurt', 'uncertain'],
]) {
  test(`${JSON.stringify(input)} returns ${status} with an explanation`, () => {
    const result = classifyFood(input);
    assert.equal(result.status, status);
    assert.ok(result.explanation.length > 15);
  });
}
test('a new check replaces a previous classification', () => {
  assert.equal(classifyFood('chips').status, 'junk');
  assert.equal(classifyFood('apple').status, 'not-junk');
});
