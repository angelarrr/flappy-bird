var PipeGraphicsComponent = function(entity) {
	this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
	var position = this.entity.components.physics.position;
	var size = this.entity.size;

	context.save();
	context.translate(position.x, position.y);
	context.fillStyle = "green";
	context.fillRect(0.5, 0, size.x, size.y);
	context.restore();
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;