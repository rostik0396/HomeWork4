var topTriangle = +prompt('Top' , 3);
var triangle = '';

for (var i = 1; i <= topTriangle; i++) {
     for (var j = 1; j <= i; j++) {
          triangle += '*';
     }
     triangle += '\n';
}
console.log(triangle);
