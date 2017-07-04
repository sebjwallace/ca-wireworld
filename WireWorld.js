
class WireWorld{

    constructor(size){

        this.states = [
            'black', // empty
            'yellow', // conductor
            'blue', // electron head
            'red' // tail
        ]

        this.neighbors = [
            [-1,-1], [0,-1], [1,-1],
            [-1,0], [1,0],
            [-1,1], [0,1], [1,1]
        ]

        this.size = size
        this.cells = new Matrix(size)

    }

    setState(x,y,v){
        this.cells.set(x,y,v)
    }

    step(ctx){

        var cells = new Matrix(this.size)

        this.cells.iterate(function(cell,x,y){

            // empty remains empty
            if(cell == 0)
                cells.set(x,y,0)

            // electron head then becomes electron tail
            else if(cell == 2)
                cells.set(x,y,3)

            // electron tail then becomes conductor
            else if(cell == 3)
                cells.set(x,y,1)

            else if(cell == 1){

                var activeNeighbors = 0
                for(var i = 0; i < this.neighbors.length; i++){
                    var nx = x + this.neighbors[i][0]
                    var ny = y + this.neighbors[i][1]
                    if(this.cells.get(nx,ny) == 2)
                        activeNeighbors++
                }

                // conductor becomes electron head if 1 or 2 neighbors are electron heads
                if(activeNeighbors == 1 || activeNeighbors == 2)
                    cells.set(x,y,2)
                // or conductor remains conductor
                else
                    cells.set(x,y,1)
            }

            if(ctx){
                ctx.fillStyle = this.states[cells.get(x,y)]
                ctx.fillRect(x*2,y*2,2,2)
            }

        }.bind(this))

        this.cells = cells

    }

}
