var InputSystem = function(entities) {
	this.entities = entities;
	// canvas is where we get input from
	this.canvas = document.getElementById('main-canvas');
	this.pause = false;
};

InputSystem.prototype.run = function() {
	this.canvas.addEventListener('click', this.onClick.bind(this));
	this.canvas.addEventListener('touchstart', this.onTouch.bind(this));
	// window.addEventListener('keydown', this.onSpace.bind(this));
};

InputSystem.prototype.onClick = function() {
	if (this.pause) {
		window.flappy.paused();
	}

	var bird = this.entities[0];
	bird.components.physics.velocity.y = 0.8;
};

InputSystem.prototype.onTouch = function(event) {
	event.preventDefault();
	var bird = this.entities[0];
	bird.components.physics.velocity.y = 0.8;
};

// InputSystem.prototype.onSpace = function(e) {
//	switch(e.keyCode) {
//		case 32: window.flappy.paused();
//	}
//};

exports.InputSystem = InputSystem;