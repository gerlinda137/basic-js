const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes;
  let separator = options.separator;
  const additionRepeatTimes = options.additionRepeatTimes;
  let addition = options.addition;
  let additionSeparator = options.additionSeparator;

  if (typeof str !== "string") {
    // str = str.toString();
    str = String(str);
  }

  if (typeof addition !== "string" && addition !== undefined) {
    // addition = addition.toString();
    addition = String(addition);
  }

  if (separator == undefined) {
    separator = "+";
  }

  if (additionSeparator == undefined) {
    additionSeparator = "|";
  }

  let finalString = "";

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      let substr = "";
      if (additionRepeatTimes && additionRepeatTimes > 0) {
        for (let j = 0; j < additionRepeatTimes; j++) {
          if (j !== additionRepeatTimes - 1) {
            substr += addition + additionSeparator;
          } else {
            substr += addition;
          }
        }
      } else if (addition !== undefined) {
        substr = addition + additionSeparator;
      } else {
        substr = "";
      }

      if (i !== repeatTimes - 1) {
        finalString += str + substr + separator;
      } else {
        finalString += str + substr;
      }
    }
    console.log(finalString);
    return finalString;
  } else {
    console.log(str + addition);
    return str + addition;
  }
}

module.exports = {
  repeater,
};
