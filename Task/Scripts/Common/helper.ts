

export function makeTimeByRunningTime(runningTime: number) {

	let hours = Math.floor(runningTime / (60 * 60));

	let divisor_for_minutes = runningTime % (60 * 60);
	let minutes = Math.floor(divisor_for_minutes / 60);

	let divisor_for_seconds = divisor_for_minutes % 60;
	let seconds = Math.ceil(divisor_for_seconds);
	return {
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds,
	}
}