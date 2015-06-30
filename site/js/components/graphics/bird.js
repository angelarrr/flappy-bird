var BirdGraphicsComponent = function(entity) {
	this.entity = entity;
};

BirdGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;

	context.save();
	context.translate(position.x, position.y);
	var img = new Image();
	img.src = "img/bird.png";
	context.drawImage(img, 0, 0, 0.07, 0.07);
	// context.beginPath();
	// context.arc(0, 0, 0.02, 0, 2 * Math.PI);
	// context.fillStyle = "yellow";
	// context.fill();
	// context.closePath();
	context.restore();
};

exports.BirdGraphicsComponent = BirdGraphicsComponent;