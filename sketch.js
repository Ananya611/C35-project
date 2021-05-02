//Create variables here
var dogImg, dogImg2
var dog,database,happyDog,foodStock,foodS
var feed , addFood , fedTime, LastFed
var  foodObj

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
  foodObj = new Food
  foodStock = database.ref('food')
  foodStock.on("value",function readstock(data){
    foodS = data.val()

    foodObj.updateFoodStock(foodS)
  })
  textSize(20)
  feed = createButton("feed the dog")
  feed.position(200,100)
  feed.mousePressed(feedDog)
  addFood = createButton("add food")
  addFood .position(250,100)
  addFood.mousePressed(addFoods)
 
}


function draw() {  
background(46,139,87)


foodObj.display()
  


fill(255,255,254)
foodObj.display()
fedTime = database.ref('FeedTime')
fedTime.on("value",function(data){
  LastFed = data.val()
})

fill(255,255,254)
textSize(15)
if(LastFed>=12){
  text("LastFed:"+LastFed%12+"pm",350,30)
}
else if(LastFed===0){
  text("LastFed : 12 am ",350,30)
}
else{
  text("LastFed: "+LastFed+"am",350,30)
}

drawSprites();


}




function feedDog(){
  dog.addImage(dogImg2)

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock*0)
  }

  
    
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }

  database.ref('/').update({
    food : foodObj.getFoodStock(),
    FeedTime : hour()
  })
  
}

function addFoods(){
  foodS++
  database.ref('/').update({
    food: foodS
  })
}














