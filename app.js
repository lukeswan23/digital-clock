function getCurrentTime() {
	const fullDate = new Date();
	var hours = fullDate.getHours()
	var minutes = fullDate.getMinutes();
	var seconds = fullDate.getSeconds();
	
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		hours = "0" + minutes;
	}
	if (seconds < 10) {
		hours = "0" + seconds;
	}
	document.getElementById('hour').innerHTML = hours + " :";
	document.getElementById('minute').innerHTML = minutes + " :";
	document.getElementById('second').innerHTML = seconds;
}



setInterval(getCurrentTime, 500)