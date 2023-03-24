/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 * 
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
	let str = color.replace('#','')
	let digits = str.length/3
	let values = []
	for (let i = 0; i < str.length; i+=digits) {
		let subVal = Number.isNaN(+str.substring(i,digits+i)) ? str.substring(i,digits+i) : +str.substring(i,digits+i)
		if(digits < 2){
			subVal = Number.isNaN(+subVal) ? subVal.repeat(2) : subVal*11
		}
		values.push(parseInt(subVal,16))
	}
    return `rgb(${values[0]}, ${values[1]}, ${values[2]})`;
}
module.exports = hexToRgb;