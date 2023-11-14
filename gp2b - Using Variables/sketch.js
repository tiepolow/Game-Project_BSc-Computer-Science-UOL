/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

var sunSize;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    //Canyon: 
    canyonPos_x = 0;
    canyonWidth = 100;
    
    //Collectable
    collectablePos_x = 100;
    collectablePos_y = 450;
    collectableSize = 50;
    
    //Mountain
    mountainPos_x = 500;
    mountainPos_y = 432;
    
    
    //Cloud
    cloudPos_x = 200;
    cloudPos_y = 150;
    
    //Sun position
    sunPos_x = 980;
    sunPos_y = 50;
    sunSize = 60;
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    //Draw Canyon
    fill(139, 69, 19); // Dark color for the canyon
    rect(canyonPos_x, 432, canyonWidth * 0.75, 144);
    
	//Mountains of canyon
    fill(139, 69, 19); // Lighter color for details
    triangle(canyonPos_x, 432, canyonPos_x +40, 332, canyonPos_x +80, 432);
    triangle(canyonPos_x +40, 432, canyonPos_x +80, 332, canyonPos_x +120, 432);
    triangle(canyonPos_x+80, 432, canyonPos_x +120, 332, canyonPos_x +160, 432);
    triangle(canyonPos_x +120, 432, canyonPos_x +160, 332, canyonPos_x +200, 432);
    
    // Collectable item
    
        //gold coin
    fill(255, 215, 0);
    ellipse (collectablePos_x, collectablePos_y, 10, 10);
    ellipse (collectablePos_x +5, collectablePos_y +15, 10, 10);
    ellipse (collectablePos_x +10, collectablePos_y, 10, 10);
    ellipse (collectablePos_x + 1, collectablePos_y +20, 10, 10);
    
    //Vault
    fill(184, 134, 11); //Brown collor for the vault
    rect(collectablePos_x, 392, 40, 40);
    
    //Vault door
    fill(0,0,0);
    rect(collectablePos_x, 412, 10, 20);
    
    	//1. a cloud in the sky

    fill(255,255,255);
    ellipse(cloudPos_x, cloudPos_y, 80, 80);
    ellipse(cloudPos_x -40, cloudPos_y, 60, 60);
    ellipse(cloudPos_x +40, cloudPos_y, 80, 80);
    ellipse(cloudPos_x +80, cloudPos_y, 60, 60);
    
    ellipse(cloudPos_x +600, cloudPos_y +50, 80, 80);
    ellipse(cloudPos_x +560, cloudPos_y +50, 60, 60);
    //ellipse(cloudPos_x +40, cloudPos_y, 80, 80);
    ellipse(cloudPos_x +640, cloudPos_y +50, 60, 60);
    
    	//2. a mountain in the distance
	//... add your code here
    
    fill(154,205,50); // Brown color for the mountain
    //triangle(mountainPos_x, mountainPos_y, mountainPos_x +200, mountainPos_y -200, mountainPos_x +400, mountainPos_y);
    triangle(mountainPos_x -300, mountainPos_y, mountainPos_x +200 -300, mountainPos_y -200, mountainPos_x +400 -325, mountainPos_y);
    
    // Simple shading for the mountain
    fill(255,245,238); // A slightly darker brown
    //triangle(600, 332, 700, 232, 800, 332);
    triangle(mountainPos_x +100 -300, mountainPos_y -100, mountainPos_x +200 -300, mountainPos_y -200, mountainPos_x +300 -310, mountainPos_y -100);
    
        //3. ading a tree
    // wood
    fill(222,184,135); //light Brown collor
    //rect (900, 282, 60, 150); original value, to perform the calculation for triangle
    rect (treePos_x, treePos_y, 60, 150);
    fill(160,82,45); //Sienna brown
    ellipse(treePos_x +30, treePos_y + 90, 20, 30); //Hole in the tree
    // leaves 
    fill(34, 139, 34); //Green collor
    //triangle(850x1, 332y1, 930x2, 232y2, 1010x3, 332y3);
    triangle(treePos_x -50, treePos_y +50, treePos_x +30, treePos_y -50, treePos_x +110, treePos_y +50);
    //triangle(850, 282, 930, 182, 1010, 282); superior part of tree
    triangle(treePos_x -50, treePos_y , treePos_x +30, treePos_y -100, treePos_x +110, treePos_y );
    
    //apples
    fill(255,0,0);
    ellipse(treePos_x -40, treePos_y, 20, 20);
    ellipse(treePos_x, treePos_y, 20, 20);
    ellipse(treePos_x +50, treePos_y, 20, 20);
    ellipse(treePos_x +100, treePos_y, 20, 20);

    
    
        // 6. a sun in the top right corner
    fill(255, 255, 0); // Yellow color for the sun
    ellipse(sunPos_x, sunPos_y, sunSize +10, sunSize+10);
    
    // Sun Smile
    fill(0);
    //eyes
    ellipse (sunPos_x -10, sunPos_y -10 , 10 ,10);
    ellipse (sunPos_x +10, sunPos_y -10 , 10 ,10);
    
    arc(sunPos_x, sunPos_y +5, 20, 20, 0, radians(180), PIE);
    
        //Draw Character Pikachu
    fill(255, 255, 0); // Pikachu's body color yellow
    ellipse(gameChar_x , gameChar_y -40
            , 40, 40); //Pikachu head
    rect(gameChar_x -10, gameChar_y -20, 20, 20); // Pikachu body
    fill(0); //black
    ellipse(gameChar_x -10, gameChar_y -50, 10, 10);// left eye
    ellipse(gameChar_x +10, gameChar_y -50, 10, 10);// right eye
    //rect(gameChar_x -10, gameChar_y -40, 20, 1); //Mouth not smiling
    arc(gameChar_x, gameChar_y -40, 20, 20, 0, radians(180)); //Mouth Smilling 
    ellipse(gameChar_x -10, gameChar_y , 10, 10); //left foot
    ellipse(gameChar_x +10, gameChar_y , 10, 10); //right foot
    fill(255,0,0);// red
    ellipse(gameChar_x -15, gameChar_y -35, 10, 10);// left red mark in chicks
    ellipse(gameChar_x + 15, gameChar_y -35, 10, 10);// right red mark in chicks
    
    //Pikachu Ears
    fill(255,255,0);
    //stroke(0);
    //ellipse(gameChar_x -10, gameChar_y -60, 5, 5)
    triangle(gameChar_x +5 , gameChar_y -58, gameChar_x +10, gameChar_y -70, gameChar_x +15, gameChar_y -53);// right ear
    triangle(gameChar_x -15 , gameChar_y -53, gameChar_x -10, gameChar_y -70, gameChar_x -5, gameChar_y -58); //left ear
    
}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}
