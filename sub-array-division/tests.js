const birthday = require('./challenge');
const assert = require('assert');

describe('Tests', function () {
  it('array of length 6', function () {
    assert(birthday([1, 1, 1, 1, 1, 1], 3, 2) === 0);
  });

  it('array of length 5', function () {
    assert(birthday([1, 2, 1, 3, 2], 3, 2) === 2);
  });

  it('array of length  82', function () {
    assert(
      birthday(
        [
          2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4,
          3, 5, 3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5,
          2, 5, 1, 3, 1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1,
          3, 5, 4, 3, 3, 1, 5, 3, 3, 3, 4, 5, 2,
        ],
        26,
        8
      )
    );
  });
});
