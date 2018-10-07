function getCurrentTime() {
	const fullDate = new Date();
	var hours = fullDate.getHours()
	var minutes = fullDate.getMinutes();
	var seconds = fullDate.getSeconds();
	
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	document.getElementById('hour').innerHTML = hours + " :";
	document.getElementById('minute').innerHTML = minutes + " :";
	document.getElementById('second').innerHTML = seconds;

	if (hours < 12) {
		document.getElementsByClassName('time')[0].style.color = "red";
		document.getElementsByClassName('time')[1].style.color = "red";
		document.getElementsByClassName('time')[2].style.color = "red";
	} else {
		document.getElementsByClassName('time')[0].style.color = "limegreen";
		document.getElementsByClassName('time')[1].style.color = "limegreen";
		document.getElementsByClassName('time')[2].style.color = "limegreen";

	}
}

setInterval(getCurrentTime, 500)