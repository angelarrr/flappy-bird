var RectCollisionComponent = function(entity, size) {
	this.entity = entity;
	this.size = size;
	this.type = 'rect';
};

RectCollisionComponent.prototype.collidesWith = function(entity) {
	if (entity.components.collision.type == 'circle') {
	    return this.collideCircle(entity);
	}
	else if (entity.components.collision.type == 'rect') {
	    return this.collideRect(entity);
	}
	return false;
};

RectCollisionComponent.prototype.collideCircle = function(entity) {
	return entity.components.collision.collideRect(this.entity);
};

RectCollisionComponent.prototype.collideRect = function(entity) {
	// find center of two rectangles from physics components
	var positionA = this.entity.components.physics.position;
	var positionB = entity.components.physics.position;

	var sizeA = this.size;
	var sizeB = entity.components.collision.size;

	// calculate four edges of each rectangle by adding and subtracting side lengths

	var leftA = positionA.x - sizeA.x/2;
	var rightA = positionA.x + sizeA.x/2;
	var bottomA = positionA.y - sizeA.y/2;
	var topA = positionA.y + sizeA.y/2;

	var leftB = positionB.x - sizeB.x/2;
	var rightB = positionB.x + sizeB.x/2;
	var bottomB = positionB.y - sizeB.y/2;
	var topB = positionB.y + sizeB.y/2;

	return !(leftA > rightB || leftB > rightA || bottomA > topB || bottomB > topA);
};

exports.RectCollisionComponent = RectCollisionComponent;