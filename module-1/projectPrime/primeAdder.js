var num = parseInt(process.argv[2]);
var cont = 0;

var list = [];

for(var i = 0; i < num; i++){
    for(var j = 0; j <= i; j++){
        if(i % j === 0){
            cont++;
        }
    }
    if(cont === 2){
        list.push(i);
    }
    cont = 0;
}

console.log(list);