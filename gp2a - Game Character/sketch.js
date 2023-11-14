/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;


function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);

	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
    
	//Add your code here ...
    //Character Pikachu will be here
    fill(255, 255, 0); // Pikachu's body color yellow
    ellipse(gameChar_x , gameChar_y -40
            , 40, 40); //Pikachu head
    rect(gameChar_x -10, gameChar_y -20, 20, 20); // Pikachu body
    fill(0); //black
    ellipse(gameChar_x -10, gameChar_y -50, 10, 10);// left eye
    ellipse(gameChar_x +10, gameChar_y -50, 10, 10);// right eye
    rect(gameChar_x -10, gameChar_y -40, 20, 1); //Mouth
    ellipse(gameChar_x -10, gameChar_y , 10, 10); //left foot
    ellipse(gameChar_x +10, gameChar_y , 10, 10); //right foot
    fill(255,0,0);// red
    ellipse(gameChar_x -15, gameChar_y -35, 10, 10);// left red mark in chicks
    ellipse(gameChar_x + 15, gameChar_y -35, 10, 10);// right red mark in chicks


	//Jumping facing forwards
    
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
    

	//Add your code here ...
    
    fill(255, 255, 0); // Pikachu's body color yellow
    ellipse(gameChar_x , gameChar_y -40
            , 40, 40); //Pikachu head
    rect(gameChar_x -10, gameChar_y -20, 20, 10); // Pikachu body
    rect(gameChar_x -10, gameChar_y -20, -12, 5); // left arm
    rect(gameChar_x +20, gameChar_y -20, -12, 5); // left arm
    fill(0); //black
    ellipse(gameChar_x -10, gameChar_y -50, 10, 10);// left eye
    ellipse(gameChar_x +10, gameChar_y -50, 10, 10);// right eye
    ellipse(gameChar_x , gameChar_y -35, 15, 5); //Open Mouth
    
    ellipse(gameChar_x -10, gameChar_y -10, 10, 10); //left foot
    ellipse(gameChar_x +10, gameChar_y -10, 10, 10); //right foot
    fill(255,0,0);// red
    ellipse(gameChar_x -15, gameChar_y -35, 10, 10);// left red mark in chicks
    ellipse(gameChar_x + 15, gameChar_y -35, 10, 10);// right red mark in chicks
    
            // Pikachu's left ear (above the head)
    fill(255, 255, 0); // yellow color
    stroke(0);
    triangle(
    gameChar_x - 10,
    gameChar_y - 75, // Adjust the y-coordinate to place it above the head
    gameChar_x - 20,
    gameChar_y - 50,
    gameChar_x - 10,
    gameChar_y - 60
);

        // Pikachu's right ear (above the head)
    triangle(
    gameChar_x + 10,
    gameChar_y - 75, // Adjust the y-coordinate to place it above the head
    gameChar_x + 20,
    gameChar_y - 50,
    gameChar_x + 10,
    gameChar_y - 60
);
    
	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...

        // Character Pikachu (walking left)
    fill(255, 255, 0); // Pikachu's body color yellow
    ellipse(gameChar_x, gameChar_y - 40, 40, 40); // Pikachu head
    rect(gameChar_x - 10, gameChar_y - 20, 15, 20); // Pikachu body
    fill(0); // Black
    ellipse(gameChar_x - 10, gameChar_y - 50, 10, 10); // eye
    rect(gameChar_x - 20, gameChar_y - 40, 10, 1); // Mouth
    ellipse(gameChar_x - 10, gameChar_y, 10, 10); // Left foot
    ellipse(gameChar_x , gameChar_y, 10, 10); // Right foot
    fill(255, 0, 0); // Red
    ellipse(gameChar_x -5 , gameChar_y - 35, 10, 10); // red mark in cheeks
    
            // Pikachu's right ear (above the head)
    
    fill(255, 255, 0); // yellow color
    stroke(0);
    triangle(
    gameChar_x + 10,
    gameChar_y - 65, // Adjust the y-coordinate to place it above the head
    gameChar_x +10,
    gameChar_y - 40,
    gameChar_x,
    gameChar_y -40,
);
    
    
	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...

    fill(255, 255, 0); // Pikachu's body color yellow
    ellipse(gameChar_x, gameChar_y - 40, 40, 40); // Pikachu head
    rect(gameChar_x , gameChar_y - 20, 15, 20); // Pikachu body
    fill(0); // Black
    ellipse(gameChar_x + 10, gameChar_y - 50, 10, 10); // eye
    rect(gameChar_x + 10, gameChar_y - 40, 10, 1); // Mouth
    ellipse(gameChar_x + 15, gameChar_y, 10, 10); // Left foot
    ellipse(gameChar_x +5, gameChar_y, 10, 10); // Right foot
    fill(255, 0, 0); // Red
    ellipse(gameChar_x +5 , gameChar_y - 35, 10, 10); // red mark in cheeks
    
            // Pikachu's right ear (above the head)
    
    fill(255, 255, 0); // yellow color
    stroke(0);
    triangle(
    gameChar_x - 10,
    gameChar_y - 65, // Adjust the y-coordinate to place it above the head
    gameChar_x - 10,
    gameChar_y - 40,
    gameChar_x ,
    gameChar_y -40,
);
    

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

    fill(255, 255, 0); // Pikachu's body color yellow
    ellipse(gameChar_x, gameChar_y - 40, 40, 40); // Pikachu head
    rect(gameChar_x , gameChar_y - 20, 15, 10); // Pikachu body
    fill(0); // Black
    ellipse(gameChar_x + 10, gameChar_y - 50, 10, 10); // eye
    ellipse(gameChar_x + 19, gameChar_y - 40, 5, 5); // Mouth
    ellipse(gameChar_x + 15, gameChar_y -10, 10, 10); // Left foot
    fill(255, 0, 0); // Red
    ellipse(gameChar_x +8 , gameChar_y - 35, 10, 10); // red mark in cheeks
    
            // Pikachu's right ear (above the head)
    
    fill(255, 255, 0); // yellow color
    stroke(0);
    triangle(
    gameChar_x - 10,
    gameChar_y - 65, // Adjust the y-coordinate to place it above the head
    gameChar_x - 10,
    gameChar_y - 40,
    gameChar_x ,
    gameChar_y -40,
);

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...

        fill(255, 255, 0); // Pikachu's body color yellow
    ellipse(gameChar_x, gameChar_y - 40, 40, 40); // Pikachu head
    rect(gameChar_x - 10, gameChar_y - 20, 15, 10); // Pikachu body
    fill(0); // Black
    ellipse(gameChar_x - 10, gameChar_y - 50, 10, 10); // eye
    ellipse(gameChar_x - 19, gameChar_y - 40, 5, 5); // Mouth
    ellipse(gameChar_x - 10, gameChar_y -10, 10, 10); // Left foot
    fill(255, 0, 0); // Red
    ellipse(gameChar_x - 8 , gameChar_y - 35, 10, 10); // red mark in cheeks
    
            // Pikachu's right ear (above the head)
    
    fill(255, 255, 0); // yellow color
    stroke(0);
    triangle(
    gameChar_x + 10,
    gameChar_y - 65, // Adjust the y-coordinate to place it above the head
    gameChar_x +10,
    gameChar_y - 40,
    gameChar_x,
    gameChar_y -40,
);
}
