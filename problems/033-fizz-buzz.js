/**
*@param { number } num
*@returns {}
*/
function fizzBuzz(num) {
	for (let i = 1; i <= num; i++) {
		let ans = i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' :
		i % 5 === 0 ? 'Buzz' : 
		i % 3 === 0 ? 'Fizz' : i
		console.log(ans)
	}
}
fizzBuzz(50)