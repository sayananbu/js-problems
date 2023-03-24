/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
	let minutes = seconds / 60
	let hours = seconds / 3600
	let days = seconds / 86400
	let weeks = seconds / 604800
	let weeksLimit = 4 
	if( weeks >= weeksLimit) return 'undefined'
	if(weeks>=2) return `${Math.floor(weeks)} weeks ago`
	if(weeks>=1) return `1 week ago`
	if(days>=2) return 'a few days ago'
	if(days>=1) return `1 day ago`
	if(hours>=12) return '12 hours ago'
	if(hours>=2) return `${Math.floor(hours)} hours ago`
	if(hours>=1) return '1 hour ago'
	if(minutes>=30) return '30 minutes ago'
	if(minutes>=2) return `${Math.floor(minutes)} minutes ago`
	if(minutes>=1) return '1 minute ago'
	if(seconds >=10) return `${Math.floor(seconds/10)*10} seconds ago`
    return 'just now';
}

module.exports = timeago;
