"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d === 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = percent / 1200;
	let body = amount - contribution;
	let payment = body * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	return Number((payment * countMonths).toFixed(2));
}