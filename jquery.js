var playing = false;
var score ;
var trailleft;
var fruits = ["img-1","img-2","img-3","img-4","img-5","img-6","img-7",];
var step;
var action;
$(function(){


// click on start reset button

$("#startreset").click(function(){

	// are we playing
	//yes 
	if( playing){
	   //reload

		location.reload();


	}else{
		//no 

		playing = true;

		// set score to 0
		score = 0;

$("#scorevalue").html(score);	

	//button text to reset game
	$("#startreset").html("reset game")


	   //show trail left box
//$("#TrailLeft").css("display", "block");	//or	
$("#TrailLeft").show();
trailleft=3;		
addHeart();	

	//sending fruit
		startAction();
		$("#gameover").hide();
	}


})











// 
	//no -> repeat n2
   // any trail left?
				//yes : repeat nb1

				//no: show game over.




//slice a fruit :-> play sound || expload fruit


$("#fruit1").mouseover(function(){
	
	score++;
	$("#scorevalue").html(score);
	clearInterval(action);

	$("#fruit1").hide("explode", 200);
	

setTimeout(startAction, 500);
	
});





function addHeart(){
 //adds trail icons
 $("#TrailLeft").empty();
for(i=0;i<trailleft;i++){
	$("#TrailLeft").append('<img src="Images/heart.png">');
}	};



function startAction(){

   $("#fruit1").show();

   chooseFruit();

$("#fruit1").css({
'left':Math.floor(Math.random()*550),
	'top': -50
});

step = 1 + Math.floor(Math.random()*5);

action = setInterval(function(){
//define a random step
		//2. move fruit down by 1 step every 10 ms
$("#fruit1").css('top',$("#fruit1").position().top + step);	


if($("#fruit1").position().top > $("#FruitContainer").height()){
 //  check fruit is too low?
   if(trailleft >1){ 

	  $("#fruit1").show();

	  chooseFruit();

	 $("#fruit1").css({
		   'left':Math.floor(Math.random()*550),
			'top': -50
				});
	  step = 1 + Math.floor(Math.random()*5)
	   trailleft --;
				 addHeart();	   
	  }

	else{
		playing = false; 
		$("#gameover").show();
	$("#startreset").html("Start");
 $("#gameover").html('<p>Game over!! </p><p>Your score is ' + score + '</p>');
		clearInterval(action)
		$("#fruit1").hide();
	}			 

}

}, 10)

};




function chooseFruit(){


//1. create a random fruit
$("#fruit1").attr('src' , 'Images/'+ fruits[Math.round(Math.random()*8)]+'.png')

   // will generate a random fruit

};

}); 






		//

















