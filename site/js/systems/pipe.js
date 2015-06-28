var pipeTop = require('../entities/pipeTop');
var pipeBottom = require('../entities/pipeBottom');

var PipeSystem = function(entities) {
	this.entities = entities;
}

PipeSystem.prototype.run = function() {
	window.setInterval(this.tick.bind(this), 2000);
};

PipeSystem.prototype.tick = function(){
	this.entities.push(new pipeTop.PipeTop(), new pipeBottom.PipeBottom());

	console.log("creating pipes");
};

exports.PipeSystem = PipeSystem;