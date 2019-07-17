function simpleTimeout(consoletimer){
	console.timeEnd(consoletimer);
}
console.time("twosecond");
setTimeout(simpleTimeout,2000,"twosecond");
console.time("onesecond");
setTimeout(simpleTimeout,1000,"onesecond");
console.time("fivesecond");
setTimeout(simpleTimeout,5000,"fivesecond");
console.time("50millisecond");
setTimeout(simpleTimeout,50,"50millisecond");