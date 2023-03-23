/**
*Отсортировать нечетные числа массива так чтобы четные остались на месте
*@param {array} array
*@returns {array}
*/
function oddSort(arr){
	let oddNums = arr.filter(item=>item % 2 !== 0).sort(compareInt).reverse()
	for (let i = 0; i < arr.length; i++) {
		if(arr[i]%2 !== 0) arr[i] = oddNums.pop()
	}
	return arr
}
const compareInt = function (a,b) { 
	return a > b ? 1 : 
	a === b ? 0 : -1
 }

module.exports = oddSort