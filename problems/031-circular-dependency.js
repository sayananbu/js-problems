/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 * 
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
// function hasCircularDependency(servicesMap) {
// 	let servicesValues = []
// 	let fieldsNum = 0
// 	for(let service in servicesMap){
// 		servicesValues.push(...servicesMap[service])
// 		fieldsNum++
// 	}
// 	removeDuplicates(servicesValues.sort())
// 	if(servicesValues.length<fieldsNum || servicesValues.length<1) return false
// 	return true
// }
// const removeDuplicates = function(nums){
// 	if(nums.length<2) return nums;
//     for(let i = 0; i<nums.length; i++){
// 		if(i+1<nums.length) {
// 			let index = nums.indexOf(nums[i], i+1)
// 			if(index>=0){
// 				nums.splice(index,1)
// 				i--
// 			}
// 		}
//     }
// 	return nums;
// }
function hasCircularDependency(servicesMap){
	let keys = Object.keys(servicesMap)
	if(keys.length < 1) return false
	let deps = new Set(Object.values(servicesMap).flat(Infinity))
	if(keys.length !== deps.size) return false
	for(let key of keys){
		if(!deps.has(key)) return false
	}
	return true
}
module.exports = hasCircularDependency;
