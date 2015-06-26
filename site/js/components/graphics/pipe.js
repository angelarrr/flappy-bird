var PipeGraphicsComponent = function(entity) {
	this.entity = entity;
};

PipeGraphicsComponent.prototype.draw = function(context) {
	context.rect(100, 100, 100,100);
	context.fill();
	console.log("Drawing a pipe");
};

exports.PipeGraphicsComponent = PipeGraphicsComponent;