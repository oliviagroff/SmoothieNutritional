var ingredients = [];
var blenderIngredients = [];
var xPos = 0;
var yPos = 0;
var scaleX;
var scaleY;
var overIngredient = false;

var xOffset = 0;
var yOffset = 0;
var ps;
var locked = false;
var caloriesTotal = 0;
var proteinTotal = 0;
var sugarTotal = 0;
var potassiumTotal = 0;
var fatTotal = 0;
var sodiumTotal = 0;
var carbTotal = 0;
var blenderObj;


function setup() {

  console.log('setup');
  // put setup code here
  createCanvas(1000, 850);

  ps = new IngredientParticleSystem();
  blenderObj = new Blender();
  ingredient = new Ingredient();

  var b = new Ingredient();
  b.ingredientImage = banana;
  b.name = 'Banana'
  b.x = 530;
  b.y = 180;
  b.xScale = 50;
  b.yScale = 90;
  b.calories = 105;
  b.protein = 1.3;
  b.sugar = 14;
  b.sodium = 1;
  b.potassium = 422;
  b.fat = .4;
  b.carbs = 27;

  var a = new Ingredient();
  a.ingredientImage = apple;
  a.name = "Apple"
  a.y = 190;
  a.x = 680;
  a.xScale = 80;
  a.yScale = 90;
  a.calories = 75;
  a.protein = .5;
  a.sugar = 19;
  a.sodium = 2;
  a.potassium = 195;
  a.fat = .3;
  a.carbs = 25;

  var s = new Ingredient();
  s.ingredientImage = strawberry;
  s.name = "Strawberry"
  s.x = 500;
  s.y = 370;
  s.xScale = 60;
  s.yScale = 70;
  s.calories = 47;
  s.protein = 1;
  s.sugar = 7;
  s.sodium = 1;
  s.potassium = 220;
  s.fat = .4;
  s.carbs = 11;

  var blu = new Ingredient();
  blu.ingredientImage = blueberries;
  blu.name = 'Blueberries';
  blu.x = 655;
  blu.y = 540;
  blu.xScale = 90;
  blu.calories = 85;
  blu.protein = 1.1;
  blu.sugar = 15;
  blu.sodium = 1;
  blu.potassium = 114;
  blu.fat = .5;
  blu.carbs = 21;

  var m = new Ingredient();
  m.ingredientImage = mango;
  m.name = 'Mango';
  m.x = 870
  m.y = 360;
  m.xScale = 90;
  m.yScale = 80;
  m.calories = 201;
  m.protein = 2.8;
  m.sugar = 46;
  m.sodium = 3;
  m.potassium = 564;
  m.fat = 1.3;
  m.carbs = 50;

  var gy = new Ingredient();
  gy.ingredientImage = greekYog;
  gy.name = 'Greek Yogurt';
  gy.x = 500;
  gy.y = 550;
  gy.xScale = 60;
  gy.yScale = 70;
  gy.calories = 80;
  gy.protein = 15;
  gy.sugar = 4;
  gy.sodium = 55;
  gy.potassium = 210;
  gy.fat = 0;
  gy.carbs = 6;

  var h = new Ingredient();
  h.ingredientImage = honey;
  h.name = 'Honey';
  h.y = 190
  h.x = 850
  h.xScale = 100;
  h.yScale = 90;
  h.calories = 64;
  h.protein = .1;
  h.sugar = 17;
  h.sodium = 1;
  h.potassium = 11;
  h.fat = 0;
  h.carbs = 17;

  var ic = new Ingredient();
  ic.ingredientImage = icecream;
  ic.name = 'Ice Cream';
  ic.x = 700
  ic.y = 370
  ic.xScale = 60;
  ic.yScale = 90;
  ic.calories = 137;
  ic.protein = 2.3;
  ic.sugar = 14;
  ic.sodium = 53;
  ic.potassium = 131;
  ic.fat = 7;
  ic.carbs = 16;

  var pb = new Ingredient();
  pb.ingredientImage = pButter;
  pb.name = 'Peanut Butter';
  pb.x = 860;
  pb.y = 540;
  pb.xScale = 50;
  pb.yScale = 80;
  pb.calories = 94;
  pb.protein = 4;
  pb.sugar = 1;
  pb.sodium = 2;
  pb.potassium = 104;
  pb.fat = 8;
  pb.carbs = 3;

  if (pb.x > 100 && pb.x <200) {
    caloriesTotal = caloriesTotal + pb.calories
  }


  ps.addIngredient(pb);
  ps.addIngredient(ic);
  ps.addIngredient(h);
  ps.addIngredient(gy);
  ps.addIngredient(m);
  ps.addIngredient(blu);
  ps.addIngredient(b);
  ps.addIngredient(a);
  ps.addIngredient(s);


}

function preload() {
  powerButton = loadImage('powerbutton.png');
  labelsFont = loadFont('Raleway-Regular.ttf');
  titleFont = loadFont('Sail-Regular.ttf')
  blender = loadImage('blender.png');
  shelves = loadImage('shelves.png');
  ingredients[0] = banana = loadImage('banana.png');
  ingredients[1] = strawberry = loadImage('strawberry.png');
  ingredients[2] = apple = loadImage('apple.png');
  ingredients[3] = blueberries = loadImage('blueberries.png');
  ingredients[4] = greekYog = loadImage('greekyogurt.png');
  ingredients[5] = honey = loadImage('honey.png');
  ingredients[6] = icecream = loadImage('icecream.png');
  ingredients[7] = mango = loadImage('mango.png');
  ingredients[8] = pButter = loadImage('peanutbutter.png');


}

function draw() {
  // put drawing code here
  background(20, 191, 171);
  imageMode(CENTER);

  image(shelves, 720, 420, 550, 420);
  noStroke();
  fill(96, 252, 210);
  rect(470, 650, 510, 180);
  ps.draw();




  textFont(titleFont);
  textSize(40);
  fill(255);
  text('Smoothie Nutrition Generator', 50, 50);
  // textFont('Arial')
  textSize(35);
  fill(204, 47, 141);
  text('Ingredients', 650, 120);
  image(blender, 220, 460);
  text('Nutrition Info', 600, 680);
  // textFont('labelsFont')
  textSize(30);
  fill(0);
  text('Calories: ' + (Math.round( blenderObj.caloriesTotal * 10)/10), 480, 720);
  text('Protein: ' + (Math.round( blenderObj.proteinTotal * 10)/10), 480, 750);
  text('Sugar: ' + blenderObj.sugarTotal, 480, 780);
  text('Potassium: ' + blenderObj.potassiumTotal, 480, 810);
  text('Fat: ' + (Math.round( blenderObj.fatTotal * 10)/10), 750, 720);
  text('Sodium: ' + blenderObj.sodiumTotal, 750, 750);
  text('Carbohydrates: ' + blenderObj.carbTotal, 750, 780);
  textSize(25);
  fill(0);
  text('Banana', 550, 200);
  text('Apple', 715, 200);
  text('Strawberries', 530, 360);
  text('(1 cup)', 530, 385);
  text('Blueberries', 700, 530);
  text('(1 cup)', 700, 555)
  text('Mango', 890, 380);
  text('Honey', 890, 190);
  text('(1 tbsp)', 890, 210);
  text('Greek', 535, 510);
  text('Yogurt', 535, 535);
  text('(5.3 oz)', 535, 560)
  text('Ice Cream', 730, 360);
  text('(1/2 cup)', 730, 385)
  text('Peanut',890, 510);
  text('Butter', 890, 535)
  text('(1 tbsp)', 890, 560)

  textFont('Times');
  textSize(15);
  text('Drag ingredients into blender', 600, 30);
  text('Click on ingredient in blender to double portion size', 600, 50);

  image(powerButton, 207.5, 600, 60, 60);

}

function mousePressed() {

  ps.makeMousePress();

  xPos = mouseX;
  yPos = mouseY;

  xOffset = mouseX-xPos;
  yOffset = mouseY-yPos;

  locked = true;
}

function mouseDragged() {

  if(locked) {
      xPos = mouseX-xOffset;
      yPos = mouseY-yOffset;
      ps.makeMouseDragged(xPos, yPos);
  }

}

function mouseReleased() {
  locked = false;
  ps.makeMouseReleased();

}

function Blender() {
  this.caloriesTotal = 0;
  this.proteinTotal = 0;
  this.sugarTotal = 0;
  this.potassiumTotal = 0;
  this.sodiumTotal = 0;
  this.fatTotal = 0;
  this.carbTotal = 0;
  this.ingredients = [];


  this.addBlenderIngredient = function (ingredient){


      this.ingredients.push(ingredient);
      this.calculateTotals();


  }
  this.calculateTotals = function (){
    this.caloriesTotal = 0;
    this.proteinTotal = 0;
    this.sugarTotal = 0;
    this.potassiumTotal = 0;
    this.sodiumTotal = 0;
    this.fatTotal = 0;
    this.carbTotal = 0;
    for (var i = 0; i < this.ingredients.length; i++) {

      if (this.ingredients[i].x > 50 && this.ingredients[i].x < 300 &&
        this.ingredients[i].y > 100 && this.ingredients[i].y < 700) {

      //this.ingredients[i]
      this.caloriesTotal = this.caloriesTotal + this.ingredients[i].calories;
      this.proteinTotal += this.ingredients[i].protein;
      this.potassiumTotal += this.ingredients[i].potassium;
      this.sodiumTotal += this.ingredients[i].sodium;
      this.fatTotal += this.ingredients[i].fat;
      this.carbTotal += this.ingredients[i].carbs;
      this.sugarTotal += this.ingredients[i].sugar;

  console.log(this.caloriesTotal)
    }

}
  }

}
