	var charimg;

	function preload() {
		charimg = loadImage('img/characterV2.png');
	}

	function Char(x, y, size) {
		Car.call(this, x, y, size, size);
		this.sitting_on = null;
	}

	Char.prototype = Object.create(Car.prototype);

	Char.prototype.attach = function(other) {
		this.sitting_on = other;
	}

	Char.prototype.update = function() {
		if(this.sitting_on !== null) {
			this.x += this.sitting_on.speed;
		}
		this.x = constrain(this.x, 0, width - this.w);
	}

	Char.prototype.show = function() {
		image(charimg, this.x, this.y,this.w, this.h);
	}