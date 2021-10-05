canvas = new fabric.Canvas("myCanvas");

ball_x = 100;
ball_y = 100;

goal_x = 800;
goal_y = 400;

block_image_width = 5;
block_image_height = 5;

ball_object= "";
goal_object= "";

function ball_update(){
	fabric.Image.fromURL("ball.png" , function(Img){
		 ball_object = Img;
		 ball_object.scaleToWidth(50);
		 ball_object.scaleToHeight(50);
		 ball_object.set({
			 top: ball_y,
			 left: ball_x

             });
			canvas.add(ball_object);
	});
};

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function(Img){
		 goal_object = Img;
		 goal_object.scaleToWidth(50);
		 goal_object.scaleToHeight(50);
		 goal_object.set({
			 top: goal_y,
			 left: goal_x

             });
			canvas.add(goal_object);
	});
	ball_update();
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==goal_x)&&(ball_y==goal_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y > 0){
			ball_y= ball_y-block_image_height;
			console.log("block_image_height = "+ block_image_height);
            console.log("When the up key is pressed, x = "+ ball_x + " y = " + ball_y);
			canvas.remove(ball_object);
			ball_update()
		}
	}

	function down()
	{
		if(ball_y < 550){
			ball_y= ball_y + block_image_height;
			console.log("block_image_height = "+ block_image_height);
            console.log("When the down key is pressed, x = "+ ball_x + " y = " + ball_y);
			canvas.remove(ball_object);
			ball_update()
		}
	}

	function left()
	{
		if(ball_x > 0){
			ball_x= ball_x-block_image_width;
			console.log("block_image_width = "+ block_image_width);
            console.log("When the left key is pressed, x = "+ ball_x + " y = " + ball_y);
			canvas.remove(ball_object);
			ball_update()
		}
	}

	function right()
	{
		if(ball_x < 1150){
			ball_x= ball_x + block_image_width;
			console.log("block_image_width = "+ block_image_width);
            console.log("When the right key is pressed, x = "+ ball_x + " y = " + ball_y);
			canvas.remove(ball_object);
			ball_update()
		}
	}
}
	
