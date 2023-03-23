/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
	let parts = date.split('.').reverse()
	let vac = new Date(parts[0],parts[1]-1,parts[2])
	vac = new Date(+vac + 86400*14*1000)
	let month = vac.getMonth()+1<10 ? '0'+(vac.getMonth()+1) : vac.getMonth()+1
	let day = vac.getDate()<10 ? '0'+vac.getDate() : vac.getDate()
	return `${day}.${month}.${vac.getFullYear()}`
}
module.exports = vacation;
