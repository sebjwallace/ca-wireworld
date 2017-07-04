
class Matrix{

    constructor(size){

        this.size = size
        this.cells = []

        for(var y = 0; y < this.size; y++){
            this.cells[y] = []
            for(var x = 0; x < this.size; x++){
                this.cells[y][x] = 0
            }
        }

    }

    set(x,y,v){
        if(this.cells[y] && this.cells[y][x] != null)
            this.cells[y][x] = v
    }

    get(x,y){
        if(this.cells[y] && this.cells[y][x] != null)
            return this.cells[y][x]
        return 0
    }

    iterate(callback){
        for(var y = 0; y < this.cells.length; y++)
            for(var x = 0; x < this.cells[y].length; x++)
                this.cells[y][x] = callback(this.cells[y][x],x,y) || this.cells[y][x]
    }

}
