    var character;
    var bg;
    var cars = [];
    var pow;

    var grid_size = 50;
    var rows = [];

    function resetGame() {
        character = new Char(width / 2, height - grid_size, grid_size);
    }

    function setup() {
        width=1000;
        rows = [
            new Row(            0, 1,    0,         width,   0,   0, true, 0),
            new Row(    grid_size, 1,    0,         width,   0,   0, true, 0),
            new Row(2 * grid_size, 2,  -0.5, 2 * grid_size, 400,  10, false, 1),
            new Row(3 * grid_size, 3, -1.3, 2 * grid_size, 200,  30, false, 2),
            new Row(4 * grid_size, 2,  -2.3, 2 * grid_size, 250,  25, false, 3),
            new Row(5 * grid_size, 1,    0,         width,   0,   0, true, 0),        
            new Row(6 * grid_size, 3,  1.2, 2 * grid_size, 150, 100, false, 4),
            new Row(7 * grid_size, 2, 3.5, 2 * grid_size, 200, 150, false, 5),
            new Row(8 * grid_size, 2,    2, 2 * grid_size, 300,   0, false, 6),
            new Row(9 * grid_size, 2,    0,         width,   0,   0, true),
        ];

        bg = loadImage('img/GabeArtboard_Street01b.jpg');

        
        cars[0] = loadImage('img/55px_car01.png');
        cars[1] = loadImage('img/55px_car02.png');
        cars[2] = loadImage('img/55px_car03.png');
        cars[3] = loadImage('img/55px_car04.png');
        cars[4] = loadImage('img/55px_car05.png');
        cars[5] = loadImage('img/55px_car06.png');
        cars[6] = loadImage('img/55px_car07.png');
        cars[7] = loadImage('img/55px_car08.png');
        cars[8] = loadImage('img/Rotate_55px_car01.png');
        cars[9] = loadImage('img/Rotate_55px_car02.png');
        cars[10] = loadImage('img/Rotate_55px_car03.png');
        cars[11] = loadImage('img/Rotate_55px_car04.png');
        cars[12] = loadImage('img/Rotate_55px_car05.png');
        cars[13] = loadImage('img/Rotate_55px_car06.png');
        cars[14] = loadImage('img/Rotate_55px_car07.png');
        cars[15] = loadImage('img/Rotate_55px_car08.png');
        
        pow = loadImage('img/pow.png');
        createCanvas(width, rows.length * grid_size);
        resetGame();
    }

    function draw() {
        background(bg);
        fill(500, 500);

        var intersects = null;

        for(var i = 0; i < rows.length; i++) {
            rows[i].show();
            rows[i].update();
            if(character.intersects(rows[i])) {
                intersects = rows[i].hits(character);
                
                if((intersects !== null) ^ rows[i].inverted) {
                    $( "#pow" ).removeClass( "hidepow" );
                    $( "#pow" ).addClass( "showpow" );

                    setTimeout(function(){ 
                        $( "#pow" ).removeClass( "showpow" );
                        $( "#pow" ).addClass( "hidepow" );
                    }, 
                    2000);
                    resetGame();
                }
            }
        }

        character.attach(intersects);
        character.update();
        character.show();
    }

    function keyPressed() {
        if(keyCode === UP_ARROW) {
            character.move(0, -grid_size);
        } else if(keyCode === DOWN_ARROW) {
            character.move(0, grid_size);
        } else if(keyCode === LEFT_ARROW) {
            character.move(-grid_size, 0);
        } else if(keyCode === RIGHT_ARROW) {
            character.move(grid_size, 0);
        }
    }
