//Create variables here
var dogImg, dogImg2
var dog,database,happyDog,foodStock,foodS


function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale = 0.15

  database = firebase.database();
  foodStock = database.ref('food')
  foodStock.on("value",function readstock(data){
    foodS = data.val()
  })
  textSize(20)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg2)
}


  
drawSprites();

fill(255,255,254)
stroke("black")
text("Food remaining:"+ foodS,170,200)
textSize(13)
text("NOTE: Press the UP arrow key to feed Draco milk",130,10,300,20)






}


function writeStock(x){
  if(x<=0){
    x = 0
    
  }
  else{
    x = x-1
    
  }
  database.ref('/').update({
    food:x
  })
}














