var CollisionSystem = function(entities) {
	this.entities = entities;
};

// check for collisions
CollisionSystem.prototype.tick = function() {
	// loop through each pair of entities
	// make sure they both have collision components
	for (var i=0; i<this.entities.length; i++) {
		var entityA = this.entities[i];
		if (!'collision' in entityA.components) {
			continue;
		}
		// each pair is only checked once
		for (var j=i+1; j<this.entities.length; j++) {
			var entityB = this.entities[j];
			if (!'collision' in entityB.components) {
				continue;
			}
			// see whether the two entities collide
			if (!entityA.components.collision.collidesWith(entityB)) {
				continue;
			}

			if (entityA.components.collision.onCollision) {
				entityA.components.collision.onCollision(entityB);
			}

			if (entityB.components.collision.onCollision) {
				entityB.components.collision.onCollision(entityA);
			}
		}
	}
};

exports.CollisionSystem = CollisionSystem;