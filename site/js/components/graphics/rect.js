var RectGraphicsComponent = function(entity, size) {
	this.entity = entity;
	this.size = size;
};

RectGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;
	var color = this.entity.color;

	context.save();
	context.translate(position.x, position.y);
	context.beginPath();
	context.fillStyle = color;
	context.fillRect(-this.size.x/2, -this.size.y/2, this.size.x, this.size.y);
	context.closePath();
	context.restore();
};

exports.RectGraphicsComponent = RectGraphicsComponent;