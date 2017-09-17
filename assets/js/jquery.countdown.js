$(document).ready(function(){
	init();
});
function init()
{
	$("#countdown").empty();
	$("#countdown").html('<div class="span3 counter-block"><span id="days-num">0</span><h4 id="days-desc">Days</h4></div>' +
				'<div class="span3 counter-block"><span id="hours-num">0</span><h4 id="hours-desc">Hours</h4></div>' +
				'<div class="span3 counter-block"><span id="min-num">0</span><h4 id="min-desc">Minutes</h4></div>' +
				'<div class="span3 counter-block"><span id="sec-num">0</span><h4 id="sec-desc">Seconds</h4></div>');
	setCountDown();
}
function checkTime(time)
{return time<10?"0"+time:time;}
function setCountDown()
{
	var now=new Date();
	var end=new Date("June 07, 2018 09:00:00");
	var t=end-now;
	if(t<0)
	{
		document.getElementById('days-num').innerHTML=0;
		document.getElementById('hours-num').innerHTML=0;
		document.getElementById('min-num').innerHTML=0;
		document.getElementById('sec-num').innerHTML=0;
		return;
	}
	t/=1000;
	document.getElementById('days-num').innerHTML=Math.floor(t/86400);
	t%=86400;
	document.getElementById('hours-num').innerHTML=checkTime(Math.floor(t/3600));
	t%=3600;
	document.getElementById('min-num').innerHTML=checkTime(Math.floor(t/60));
	document.getElementById('sec-num').innerHTML=checkTime(Math.floor(t%60));
	setTimeout('setCountDown()',500);
}

