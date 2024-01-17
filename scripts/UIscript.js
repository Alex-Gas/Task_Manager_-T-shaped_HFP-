
function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
	setTimeout(startTime, 1000);
}
  
  function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

const date = new Date();

const renderCalendar = () => {
	date.setDate(1);

	const monthDays = document.querySelector(".days");

	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

	const firstDayIndex = date.getDay();

	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

	const nextDays = 7 - lastDayIndex - 1;

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	document.querySelector(".date h4").innerHTML = months[date.getMonth()];

	document.querySelector(".date p").innerHTML = new Date().toDateString();

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
		i === new Date().getDate() &&
		date.getMonth() === new Date().getMonth()
		) {
		days += `<div class="today">${i}</div>`;
		} else {
		days += `<div>${i}</div>`;
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="next-date">${j}</div>`;
		monthDays.innerHTML = days;
	}
};

function UIsetup(){

	setListeners();
	startTime();
	startTimeScale()
	renderCalendar();
}

function setListeners(){
	document.querySelector(".prev").addEventListener("click", () => {
		date.setMonth(date.getMonth() - 1);
		renderCalendar();
	  });
	  
	document.querySelector(".next").addEventListener("click", () => {
		date.setMonth(date.getMonth() + 1);
		renderCalendar();
	});
}

function startTimeScale(){
	var div = document.getElementsByClassName("timescale");
	var now = new Date();
	var start = new Date();
	start.setHours(0, 0, 0, 0);
	var seconds = Math.floor((now.getTime() - start.getTime()) / 1000);

	var pixels = Math.ceil(seconds/90);
	var offset = 200;

	div[0].style.top = -1199 + pixels + offset + "px";

	setTimeout(startTimeScale, 1000);
}


function toggleChat(x){

	switch(x){

		case 1:
			var AIchat = document.querySelector('#UIquickAIchatbox .chatbody')
			if (AIchat.style.display === "none") {
				AIchat.style.display = "block";
			} 
			else {
				AIchat.style.display = "none";
			}
			break

		case 2:
			var Fchat = document.querySelector('#UIquickfriendschatbox .chatbody')
			if (Fchat.style.display === "none") {
				Fchat.style.display = "block";
			} 
			else {
				Fchat.style.display = "none";
			}
			break
	}
}

function toggleMainMenu(){
	var main_set = document.querySelector('.UImain-settings')
	if (main_set.style.display === "none") {
		main_set.style.display = "block";
	} 
	else {
		main_set.style.display = "none";
	}
}
