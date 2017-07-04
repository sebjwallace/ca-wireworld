
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var ww = new WireWorld(100)

for(var i = 0; i < 100; i++){
    ww.setState(i,2,1)
    ww.setState(45,i,1)
}

ww.setState(4,2,2)

setInterval(function(){
    ww.step(ctx)
},40)
