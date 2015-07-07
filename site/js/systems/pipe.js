var pipe = require('../entities/pipe');
var settings = require('../settings');

var PipeSystem = function(entities) {
	this.entities = entities;
	this.canvas = document.getElementById('main-canvas');
	this.interval = 0;
	this.pause = false;
};

PipeSystem.prototype.run = function() {
	this.interval = window.setInterval(this.tick.bind(this), 2000);
};

PipeSystem.prototype.tick = function(){

	// if (this.pause) {
	// 	return;
	// }

	var right = 0.5 * this.canvas.width / this.canvas.height;
	var gapPos = 0.4 + Math.random() * 0.2;

	var height = gapPos - settings.pipeGap / 2;
	var position = {
		x: right + settings.pipeWidth / 2,
		y: height / 2
	};

	var size = {
		x: settings.pipeWidth,
		y: height
	};

	this.entities.push(new pipe.Pipe(position, size));

	var height = 1 - gapPos - settings.pipeGap / 2;
	var position = {
		x: right + settings.pipeWidth / 2,
		y: 1 - height / 2
	};

	var size = {
		x: settings.pipeWidth,
		y: height
	};
    
    this.entities.push(new pipe.Pipe(position, size));
};

exports.PipeSystem = PipeSystem;