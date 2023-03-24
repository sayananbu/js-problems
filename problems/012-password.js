/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример: 
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
	const upperCase = [65,90]
	const lowerCase = [97, 122]
	let upper, lower, digit
	upper = lower = digit = false
	let length = password.length >= 7
	if(!length) return false
	for(let letter of password){
		if(!(upper && lower && digit)){
			if(!upper && letter.charCodeAt() >= upperCase[0] && letter.charCodeAt() <= upperCase[1]){
				upper = true
				continue
			}
			if(!lower && letter.charCodeAt() >= lowerCase[0] && letter.charCodeAt() <= lowerCase[1]){
				lower = true
				continue
			}
			if(!digit && Number.isInteger(+letter)) digit = true
		}
		else break
	}
    return upper && lower && digit;
}

module.exports = validatePassword;
