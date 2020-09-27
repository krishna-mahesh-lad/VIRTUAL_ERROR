var dog, happyDog, database, foodS, foodStock;
var doggie, doggieSmile;
var database;

function preload()
{
  doggie = loadImage("images/dogImg.png");
  doggieSmile = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
  dog = createSprite(250, 250, 20, 20);
  dog.addImage(doggie);
  dog.scale = 0.3;
  
}


function draw() {  
  background(46, 139, 87);

  drawSprites();
  //add styles here

}



