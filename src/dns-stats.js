const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  for (let i = 0; i < domains.length; i++) {
    const adress = domains[i];
    const adressSplitted = adress.split(".");
    let prop = `.${adressSplitted[adressSplitted.length - 1]}`;
    for (let j = adressSplitted.length - 1; j >= 0; j--) {
      const domName = `.${adressSplitted[j]}`;
      if (prop !== domName) {
        prop += domName;
      }
      if (Object.hasOwn(obj, prop)) {
        obj[prop] += 1;
      } else {
        obj[prop] = 1;
      }
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
