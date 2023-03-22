/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
	if(value.length === 0 || value.length < 2) return false
	let stack = []
	value.split('').forEach(item=>{
		if(item === ')' && stack[stack.length-1] === '(') stack.pop()
		else stack.push(item)
	})
    return stack.length === 0 ? true : false;
}

module.exports = parentheses;
