/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 * 
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
const anagram = require('./018-anagram');
const anagramCheck = require('./018-anagram')
function searchAnagrams(value) {
	if(value === '') return ''
	let words = value.replaceAll(/[,.]/g,'').split(' ')
	let anagrams = []
	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words.length; j++) {
			if(i === j) continue
			if(anagramCheck(words[i],words[j])){
				anagrams.push(words[i])
			}
		}
	}
    return anagrams.length > 0 ? anagrams.join([' ']) : ''
}

module.exports = searchAnagrams;
