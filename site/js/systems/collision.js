var bird = require("../entities/bird");
var pipe = require("../entities/pipe");
var pipeGarbage = require("../entities/pipeGarbage");
var scoreSystem = require("./score");
var scoreKeeper = require("../entities/score");

var CollisionSystem = function(entities) {
	this.entities = entities;
	this.scoreSystem = new scoreSystem.ScoreSystem();
};

CollisionSystem.prototype.run = function() {
	window.setInterval(this.tick.bind(this), 1000/60);
};

// check for collisions
CollisionSystem.prototype.tick = function() {
	// loop through each pair of entities
	// make sure they both have collision components
	for (var i=0; i<this.entities.length; i++) {
		var entityA = this.entities[i];

		// continue if no collision component
		if (!'collision' in entityA.components) {
			continue;
		}

		// each pair is only checked once
		for (var j=i+1; j<this.entities.length; j++) {
			var entityB = this.entities[j];

			// continue if no collision component
			if (!'collision' in entityB.components) {
				continue;
			}
			// see whether the two entities collide
			if (!entityA.components.collision.collidesWith(entityB)) {
				continue;
			}

			if (entityA.components.collision.onCollision) {
				entityA.components.collision.onCollision(entityB);
				// take pipes off when bird collides
				if (entityA instanceof bird.Bird) {
				//	this.entities.splice(5, this.entities.le//ngth - 5);
					this.scoreSystem.resetScore();
				}

				// take 2 pipes off when hit pipeGarbage
				if (entityA instanceof pipeGarbage.PipeGarbage) {
					this.entities.splice(5,2);
				}

				// add to score
				if (entityA instanceof scoreKeeper.ScoreKeeper && entityB instanceof pipe.Pipe) {
					this.scoreSystem.keepScore();
				}
			}

			if (entityB.components.collision.onCollision) {
				entityB.components.collision.onCollision(entityA);
				// take pipes off
				//if (entityB instanceof bird.Bird) {
				//	this.entities.splice(5, this.entities.le//ngth - 5);
				//	this.scoreSystem.resetScore();
				//}
			}
		}
	}
};

exports.CollisionSystem = CollisionSystem;