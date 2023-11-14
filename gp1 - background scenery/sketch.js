/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 15 lines of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

    fill(255,255,255);
    ellipse(200, 150, 80, 80);
    ellipse(160, 150, 60, 60);
    ellipse(240, 150, 80, 80);
    ellipse(280, 150, 60, 60);
    
	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here
    
    fill(139, 69, 19); // Brown color for the mountain
    triangle(500, 432, 700, 232, 900, 432);
    
    // Simple shading for the mountain
    fill(120, 60, 0); // A slightly darker brown
    triangle(600, 332, 700, 232, 800, 332);

	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here

    fill(139, 69, 19); //Brown collor
    rect (900, 282, 60, 150);
    
    // leaves 
    fill(34, 139, 34); //Green collor
    triangle(850, 332, 930, 232, 1010, 332);
    triangle(850, 282, 930, 182, 1010, 282);
    
    //apples
    fill(255,0,0);
    ellipse(870, 340, 20, 20);
    ellipse(910, 340, 20, 20);
    ellipse(950, 340, 20, 20);
    ellipse(990, 340, 20, 20);
    
    ellipse(870, 282, 20, 20);
    ellipse(910, 282, 20, 20);
    ellipse(950, 282, 20, 20);
    ellipse(990, 282, 20, 20);
    ellipse(990, 282, 20, 20);
    
	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    
    fill(139, 69, 19); // Dark color for the canyon
    rect(0, 432, 100, 144);
    
    // Add shading and details using rectangles
    fill(100, 50, 0); // Slightly darker color for shading
    for (let y = 432; y <= height; y += 10) {
        rect(0, y, 100, 10);
    }
    
   
    fill(139, 69, 19); // Lighter color for details
    triangle(0, 432, 40, 332, 80, 432);
    triangle(40, 432, 80, 332, 120, 432);
    triangle(80, 432, 120, 332, 160, 432);
    triangle(120, 432, 160, 332, 200, 432);

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
    //gold coin
    fill(255, 215, 0);
    ellipse (400, 450, 10, 10);
    ellipse (380, 440, 10, 10);
    ellipse (360, 460, 10, 10);
    ellipse (390, 455, 10, 10);
    
    //Vault
    fill(184, 134, 11); //Brown collor for the vault
    rect(340, 392, 40, 40);
    
    //Vault door
    fill(0,0,0);
    rect(350, 412, 10, 20);
    

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
    
    // 6. a sun in the top right corner
    fill(255, 255, 0); // Yellow color for the sun
    ellipse(990, 50, 60, 60);
}
