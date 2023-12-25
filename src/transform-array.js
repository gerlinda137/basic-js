const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let next = arr[i + 1];
    let prev = arr[i - 1];

    if (cur == "--double-next") {
      if (next) {
        newArr.push(next);
      }
    } else if (cur == "--double-prev") {
      if (prev) {
        newArr.push(prev);
      }
    } else if (cur == "--discard-next") {
      if (next) {
        i += 2;
      }
    } else if (cur == "--discard-prev") {
      newArr.pop();
    } else {
      ``;
      newArr.push(cur);
    }
  }

  console.log(newArr);
  return newArr;
}

transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5]);

module.exports = {
  transform,
};
