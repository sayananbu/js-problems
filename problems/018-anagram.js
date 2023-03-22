/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
	if(x==='') return false
	if(x.length !== y.length) return false
	let dx = (x.toLowerCase()).split('').sort()
	let dy = (y.toLowerCase()).split('').sort()
	for (let i = 0; i < x.length; i++) {
		if(dx[i] !== dy[i]) return false 
	}
    return true
}

module.exports = anagram;
