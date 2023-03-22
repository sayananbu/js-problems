/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
	if(value.length === 0) return ''
	let count = 0
	let letter = value[0]
	let arr = value.split('')
	let result = []
	const checkEnd = (arr,index) =>{
		if(arr.length === index+1){
			let str = count > 1 ? count+letter : letter
			result.push(str)
		}
	}
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] === letter){
			count++
			checkEnd(arr,i)
		} 
		else{
			let str = count > 1 ? count+letter : letter
			result.push(str)
			count = 1
			letter = arr[i]
			checkEnd(arr,i)
		}
		
	}
    return result.join('');
}

module.exports = rle;
