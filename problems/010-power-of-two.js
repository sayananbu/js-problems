/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 * 
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
	if(n < 1 || (n > 1 && n % 2 !== 0)) return undefined
	let power = 0
	while(2**power !== n){
		if(2**power>n) return undefined
		power++
	}
    return power; 
}

module.exports = getPower;
