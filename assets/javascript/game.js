$(document).ready(function(){

//Variables
var wins = 0;
var loses = 0;
var total = 0;
var divwins = $('.win');
var divloss = $('.loss');
var divtot = $('#crystnum');
var divrand = $('#random');
var cryst1 = random(1,12);
var cryst2 = random(1,12);
var cryst3 = random(1,12);
var cryst4 = random(1,12);
var rand = random(19,120);
//The random number:
	divrand.html('<header>The new number to match is:    ' + rand +'</header>' );






//Generating a random number#
function random(min,max){
	return Math.floor(Math.random() * (max-min+1) + min);
}





// Setting images---------------
for (var i = 1; i <=4; i++) {
	$("#crystal").append('<div class="image" id="crystal' + i + '"></div>');
	console.log(i);
	$('<img src="assets/images/crystal' + i + '.jpeg">').prependTo('#crystal'+i);
	
	}
//CSS Styling-----------------------------

	
	$('#crystal').css('width', '400px');
	$('#crystal').css('height', '150px');
	$('img').css('float', 'left');
	$('img').css('height', '100');

//Click events-----------------



$('#crystal1').on('click', function(){

	total += cryst1; 
	divtot.html(total);
	test();
})
$('#crystal2').on('click', function(){

	total+= cryst2;
	divtot.html(total);	
	test();
})
$('#crystal3').on('click', function(){

	total+= cryst3;
	divtot.html(total);	
	test();
})
$('#crystal4').on('click', function(){

	total+=cryst4;
	divtot.html(total);
	test();
})



//test

var test = function(){

	if (total === rand ) {
		wins++;
		divwins.html('Wins: '+wins);
		alert("Bravo!!!------You WIN");
		reset();
		divtot.empty();
		
	} else if(total > rand) {
		loses++;
		divloss.html('Losses: '+loses);
		alert("Sorry! Your number does NOT match.");
		reset()
		divtot.empty();
		
	}
}

//reset
var reset = function(){
	var x = confirm('Would you like to try again?');
	if (x) {
	cryst1 = random(1,12);
	cryst2 = random(1,12);
	cryst3 = random(1,12);
	cryst4 = random(1,12);
	rand = random(19,120);
	divrand.html('<header>The new number to match is:    ' + rand +'</header>' );
	total = 0;

	}else {
		alert('Thank you! Comeback soon;)');
	}



}





})
