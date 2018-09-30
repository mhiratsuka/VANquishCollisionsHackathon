
    function Obstacle(x, y, w, h, s, i) {
        Car.call(this, x, y, w, h, i);
        this.speed = s;
        this.imgnum = i; 
    }


    Obstacle.prototype = Object.create(Car.prototype);

    Obstacle.prototype.update = function() {
        this.move(this.speed, 0);
        if(this.x > width + grid_size) {
            this.x = - this.w - grid_size;
        }
        if(this.x < - this.w - grid_size) {
            this.x = width + grid_size;
        }
    }

    Obstacle.prototype.show = function() {
        if (this.imgnum == 0) {
            fill(color(0,0,0,0.1));
            rect(this.x, this.y, this.w, this.h);
        } else if(this.imgnum == 1) {
            image(cars[8], this.x, this.y,this.w, this.h);
        } else if(this.imgnum == 2) {
            image(cars[9], this.x, this.y,this.w, this.h);
        } else if(this.imgnum == 3) {
            image(cars[10], this.x, this.y,this.w, this.h);
        } else if(this.imgnum == 4) {
            image(cars[3], this.x, this.y,this.w, this.h);
        } else if(this.imgnum == 5) {
            image(cars[4], this.x, this.y,this.w, this.h);
        } else if(this.imgnum == 6){
            image(cars[5], this.x, this.y,this.w, this.h);
        }
    }
