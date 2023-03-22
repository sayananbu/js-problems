/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
	if(value<2 && value>=0) return value
	let nums=[0,1]
	for (let i = 2;; i++){
		if(nums[nums.length-1] > value) return undefined
		if(nums[nums.length-1] === value) return nums.length-1
		nums.push(nums.at(i-1)+nums.at(i-2))
	}
}

module.exports = isFibonacci;
