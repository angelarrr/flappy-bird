var CircleCollisionComponent = function(entity, radius) {
	this.entity = entity;
	this.radius = radius;
	this.type = 'circle';
};

CircleCollisionComponent.prototype.collidesWith = function(entity) {
	if (entity.components.collision.type == 'circle') {
	    return this.collideCircle(entity);
	}
	else if (entity.components.collision.type == 'rect') {
	    return this.collideRect(entity);
	}
	return false;
};

CircleCollisionComponent.prototype.collideCircle = function(entity) {
	// get two positions from physics components of the entities
	var positionA = this.entity.components.physics.position;
	var positionB = entity.components.physics.position;

	var radiusA = this.radius;
	var radiusB = entity.components.collision.radius;

	// work out difference between two positions
	var diff = {x: positionA.x - positionB.x, y: positionA.y - positionB.y};

	// calculate distance using trig: length of hypotenuse squared is sum of square of other two sides
	var distanceSquared = diff.x * diff.x + diff.y * diff.y;
	var radiusSum = radiusA + radiusB;

	return distanceSquared < radiusSum * radiusSum;
};

CircleCollisionComponent.prototype.collideRect = function(entity) {
	var clamp = function(value, low, high) {
		if (value < low) {
			return low;
		}
		if (value > high) {
			return high;
		}
		return value;
	};

	// get center of circle and rectangle
	var positionA = this.entity.components.physics.position;
	var positionB = entity.components.physics.position;
	// size of the rectangle
	var sizeB = entity.components.collision.size;

	// find the closest point in the rectangle to the circle
	// to find closest point on x-axis, limit position of the circle to be within left and right edges of the rectangle
	// to find closest pint on y-axis, limit y position to be within top and bottom of the rectangle
	var closest = {
		x: clamp(positionA.x, positionB.x - sizeB.x / 2,
				positionB.x + sizeB.x / 2),
		y: clamp(positionA.y, positionB.y - sizeB.y / 2,
				positionB.y + sizeB.y / 2)
	};

	// work out distance between center of circle and the closest point and see whether this is less than the radius
	var radiusA = this.radius;

	var diff = {x: positionA.x - closest.x, y: positionA.y - closest.y};

	var distanceSquared = diff.x * diff.x + diff.y * diff.y;
	return distanceSquared < radiusA * radiusA;
};

exports.CircleCollisionComponent = CircleCollisionComponent;