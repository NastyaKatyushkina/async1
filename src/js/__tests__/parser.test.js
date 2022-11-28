import { expect, test } from '@jest/globals';
import json from '../parser';
import read from '../reader';

test('', (done) => {
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  read().then((data) => json(data)).then((received) => {
    expect(received).toEqual(expected);
    done();
  });
});