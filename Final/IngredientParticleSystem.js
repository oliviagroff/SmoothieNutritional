

function Ingredient() {
	this.name = 'Unnamed';
	this.x;
	this.y;
	this.xScale = 60;
	this.yScale = 110;
	this.ingredientImage;
	this.calories;
	this.potassium;
	this.sodium;
	this.carbs;
	this.sugar;
	this.fat;
	this.protein;
	this.spacing = 10;
	this.original_xScale = 0;
	this.original_yScale = 0;
	this.overIngredient = false;
	this.locked = false;
	this.insideBlender = false;
	this.totalCals = 0;



	this.update = function() {

		// 1 time initiliazation of original values
		if(this.original_xScale == 0 || this.original_yScale == 0) {
			this.original_xScale = this.xScale;
			this.original_yScale = this.yScale;
		}

		if (mouseX >= this.x - 40 && mouseX <= this.x + 40 &&
			mouseY >= this.y - 65 && mouseY <= this.y + 65) {
			this.overIngredient = true;
			if (this.overIngredient == true) {
				//console.log('update')
				this.xScale = this.original_xScale + this.original_xScale * .1;
				this.yScale = this.original_yScale + this.original_yScale * .1;
			}
		} else {
			this.xScale = this.original_xScale;
			this.yScale = this.original_yScale;
			this.overIngredient = false;
		}
	}


	this.draw = function() {
		this.update()
		image(this.ingredientImage, this.x, this.y, this.xScale, this.yScale);
		image(this.ingredientImage, this.x, this.y, this.xScale, this.yScale)
	}


	this.updateLock = function() {
		if(this.overIngredient) {
			this.locked = true;
		} else {
			this.locked = false;
		}
	}

	this.releaseLock = function() {
			this.locked = false;
	}
}

	this.checkInsideBlender = function () {
		if (this.ingredients[i].x > 50 && this.ingredients[i].x < 500 &&
			this.ingredients[i].y > 100 && this.ingredients[i].y < 700) {
				this.insideBlender = true
			}
	}


function IngredientParticleSystem() {

	this.ingredients = [];
	this.blenderIngredients = [];

	this.draw = function() {
		for (var i = 0; i < this.ingredients.length; i++) {

			this.ingredients[i].draw();
		}
	};

	this.moveIngredient = function() {

		for (var i = 0; i < this.ingredients.length; i++) {
			var p = this.ingredients[i];

		}
	};

	this.makeMousePress = function() {

		for (var i = 0; i < this.ingredients.length; i++) {
			this.ingredients[i].updateLock();
		}
	};

	this.makeMouseDragged = function(xPos, yPos) {
		for (var i = 0; i < this.ingredients.length; i++) {
			if(this.ingredients[i].locked) {
				this.ingredients[i].x = xPos;
				this.ingredients[i].y = yPos;
			}
		}
	}

	this.makeMouseReleased = function() {


			for (var i = 0; i < this.ingredients.length; i++) {
				if(this.ingredients[i].locked)

					if (this.ingredients[i].x > 50 && this.ingredients[i].x < 500 &&
						this.ingredients[i].y > 100 && this.ingredients[i].y < 700) {


							blenderObj.addBlenderIngredient(this.ingredients[i])


						}


				this.ingredients[i].releaseLock();
			}
		};
	this.addIngredient = function(ingredient) {
		this.ingredients.push(ingredient);
	};

	for (var i = 0; i < this.ingredients.length; i++) {
	if (this.ingredients[i].x > 50 && this.ingredients[i].x < 500 &&
		this.ingredients[i].y > 100 && this.ingredients[i].y < 700) {

	this.addBlenderIngredient = function(ingredient) {

		this.ingredients.push(ingredient);
}
	};
}
}
