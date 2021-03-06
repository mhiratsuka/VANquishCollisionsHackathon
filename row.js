    function Row(y, count, speed, obs_width, spacing, offset, inverted, imgnum) {
        Car.call(this, 0, y, width, grid_size);
        this.obstacles = [];
        this.inverted = inverted;

        for(var i = 0; i < count; i++) {
          var x = i * spacing + offset;
          this.obstacles.push(new Obstacle(x, y, obs_width, grid_size, speed, imgnum));
        }
    }

    Row.prototype = Object.create(Car.prototype);

    Row.prototype.show = function() {
        for(var i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].show();
        }
    }

    Row.prototype.update = function() {
        for(var i = 0; i < this.obstacles.length; i++) {
          this.obstacles[i].update();
        }
    }

    Row.prototype.hits = function(collider) {
        var obstacle = null;
        for(var i = 0; i < this.obstacles.length; i++) {
          if(collider.intersects(this.obstacles[i])) {
            obstacle = this.obstacles[i];
          }
        }
        return obstacle;
    }
