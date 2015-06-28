var pipe = require('../entities/pipe');

var PipeSystem = function(entities) {
	this.entities = entities;
}

PipeSystem.prototype.run = function() {
	window.setInterval(this.tick.bind(this), 2000);
};

PipeSystem.prototype.tick = function(){
	console.log("creating pipes");
	var arr = this.entities;
	arr.push(new pipe.Pipe());
};

exports.PipeSystem = PipeSystem;