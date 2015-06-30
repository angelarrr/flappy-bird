var ScoreSystem = function() {
	this.score = 0;
	this.updateScore = document.getElementById("score");
};

ScoreSystem.prototype.keepScore = function() {
	this.score++;
	this.updateScore.innerHTML = this.score;
};

ScoreSystem.prototype.resetScore = function() {
	this.score = 0;
	this.updateScore.innerHTML = this.score;
};

exports.ScoreSystem = ScoreSystem;