var BirdGraphicsComponent = function(entity) {
	this.entity = entity;
	this.radius = 0.07;
	this.image = new Image();
	this.image.src = "img/bird.png";
};

BirdGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;

	context.save();
	context.translate(position.x, position.y);
	context.scale(this.radius / this.image.width, -this.radius / this.image.height);
	context.drawImage(this.image, 0, 0);
	context.translate(-this.radius/2, -this.radius/2);
	// context.beginPath();
	// context.arc(0, 0, 0.02, 0, 2 * Math.PI);
	// context.fillStyle = "yellow";
	// context.fill();
	// context.closePath();
	context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;