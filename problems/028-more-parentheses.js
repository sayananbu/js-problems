/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
	if(value.length<2) return false
	let caracters = new Map([
		['<','>'],
		['{','}'],
		['(',')']
	])
	let buffer = []
	for (let i = 0; i < value.length; i++) {
		if(caracters.get(buffer[buffer.length-1]) === value[i]) buffer.pop()
		else buffer.push(value[i])
	}
    return buffer.length > 0 ? false : true;
}

module.exports = parentheses;
