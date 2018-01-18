var canvas=document.getElementById('test_paper');

//canvas.setAttribute()
var ctx=canvas.getContext('2d');
//ctx.fillStyle='#FF0000';
var img = document.getElementById('paper');
canvas.width=img.width;
canvas.height=img.height;
ctx.save();
img.onload = function(){
	console.log("加载完成！！！");
//	ctx.drawImage(img,  0, 0);
}
/*function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    //alert('x: ' + x + '\ny: ' + y);
    return { 'x': x, 'y': y };
}*/
i = 0;
var data_x=new Array();
var data_y=new Array();
document.onclick=function(ev){      
        //再次点击时，清空textarea里面的内容
        $(".x").html('');
        $(".y").html('');         
        $(".data_x").html('');
        $(".data_y").html('');   
        var oEvent=ev||event;
        var x = oEvent.screenX;//获取x坐标
        var y = oEvent.screenY;//获取y坐标
        $(".x").append(x);//x添加到textarea中
        $(".y").append(y);//y添加到textarea中
        data_x[i] = x + "|";
        data_y[i] = y + "|";
        i++;
        $(".data_x").append(data_x);
        $(".data_y").append(data_y);
};


function mousePos(e)  
{//获取鼠标所在位置的坐标，相对于整个页面  
  var x,y;   
  var e = e||window.event;   
  return {   
    x:e.clientX+document.body.scrollLeft + document.documentElement.scrollLeft,   
    y:e.clientY+document.body.scrollTop + document.documentElement.scrollTop   
  };   
}  
  
function getCanvasPos(canvas,e)  
{//获取鼠标在canvas上的坐标  
    var rect = canvas.getBoundingClientRect();   
    return {   
     x: e.clientX - rect.left * (canvas.width / rect.width),  
     y: e.clientY - rect.top * (canvas.height / rect.height)  
   };  
}  
function draw(e)  
{  
    var c=document.getElementById("myCanvas");  
    var cxt=c.getContext("2d");  
    cxt.clearRect(0,0,c.width,c.height);  
    cxt.fillStyle="#FF0000";  
    cxt.beginPath();  
    //cxt.arc(mousePos(e).x,mousePos(e).y,15,0,Math.PI*2,true);  
    cxt.arc(getCanvasPos(c,e).x,getCanvasPos(c,e).y,15,0,Math.PI*2,true);  
    cxt.closePath();  
    cxt.fill();  
}  