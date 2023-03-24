/**
 * Последовательностью Фибоначчи называется последовательность чисел
 * a0, a1, ..., an, ..., где
 * a0 = 0,
 * a1 = 1,
 * ak = ak-1 + ak-2 (k > 1).
 *
 * Напишите функцию fibonacci(n) вычисляющую n-ное число последовательности
 * 
 * Пример:
 *
 * fibonacci(2) === 1
 * fibonacci(3) === 2
 * fibonacci(7) === 13
 *
 * @param {number} n >= 0
 * @returns {number}
 */
function fibonacci(n) {
	if(n<2 && n>=0) return n
	let nums=[0,1]
	for (let i = 2; i <= n; i++) {
		nums.push(nums.at(i-1)+nums.at(i-2))
	}
    return nums[nums.length-1];
}

module.exports = fibonacci;
