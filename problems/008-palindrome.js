/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function isPalindrome(value) {
	for (let i = 0; i < Math.trunc(value.length/2); i++) {
		if(value[i] !== value.at(-i-1))
			return false
	}
    return true;
}

module.exports = isPalindrome;
