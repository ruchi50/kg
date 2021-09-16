canvas = document.getElementById("canvas_new");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red" ;
ctx.lineWidth = 1 ;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue" ;
ctx.lineWidth = 5 ;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();
 
ctx.beginPath();
ctx.strokeStyle = "yellow" ;
ctx.lineWidth = 5 ;
ctx.arc(295,252,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black" ;
ctx.lineWidth = 5 ;
ctx.arc(345,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green" ;
ctx.lineWidth = 5 ;
ctx.arc(394,252,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red" ;
ctx.lineWidth = 5 ;
ctx.arc(440,210,40,0,2*Math.PI);
ctx.stroke();