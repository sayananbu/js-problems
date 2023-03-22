/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret, offset=1) {
	secret=secret.toLocaleLowerCase()
	let sentence = secret.split('')
	let charcode = 0
	let result = ''
	sentence.forEach((value, index) => {
		if(value !== ' '){
			if(value !== 'z') charcode = value.charCodeAt()+1
			else charcode = value.charCodeAt()-25
			result += String.fromCharCode(charcode)
		}
		else result+= value
	})
    return result;
}

module.exports = decrypt;
