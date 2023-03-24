/**
 * Напишите функцию union(a, b) возвращающую упорядоченный по возрастанию массив
 * состоящий из чисел встречающихся в обоих наборах.
 *
 * Пример:
 *
 * union([1, 1, 3, 2, 5], [5, 3, 7, 7]) === [3, 5]
 * union([2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2], [3, 6, 9, 12, 15, 18]) === [6, 12]
 * union([1, 2, 3], [11, 0, -1]) === []
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function union(a, b) {
	let result = []
	let arrA = removeDuplicates(a.sort((a,b)=>a-b))
	let arrB = removeDuplicates(b.sort((a,b)=>a-b))
	if(arrA.length>arrB.length){
		let buf = arrA
		arrA = arrB
		arrB = buf
	}
	arrA.forEach(value=>{
		if(arrB.includes(value)) result.push(value)
	})
    return result; 
}
let removeDuplicates = function(nums) {
    if(nums.length<2) return nums;
    for(let i = 0; i<nums.length; i++){
		if(i+1<nums.length) {
			let index = nums.indexOf(nums[i], i+1)
			if(index>=0){
				nums.splice(index,1)
				i--
			}
		}
    }
	return nums;
};
module.exports = union;
