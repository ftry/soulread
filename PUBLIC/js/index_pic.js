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


function getLocation(x, y) {  
	var bbox = canvas.getBoundingClientRect();
	//var x = (x - bbox.left) * (canvas.width / bbox.width);//获取x坐标
	//var y = (y - bbox.top) * (canvas.height / bbox.height);//获取y坐标
	//$(".x").append(x);//x添加到textarea中
	//$(".y").append(y);//y添加到  
    return {  
        x: (x - bbox.left) * (canvas.width / bbox.width),  
		y: (y - bbox.top) * (canvas.height / bbox.height)
		
		
		  
		
        /*  
         * 此处不用下面两行是为了防止使用CSS和JS改变了canvas的高宽之后是表面积拉大而实际  
         * 显示像素不变而造成的坐标获取不准的情况  
        x: (x - bbox.left),  
        y: (y - bbox.top)  
        */  
	};
	//$("x").append(x);//x添加到textarea中
	//$("y").append(y);//y添加到textarea中
	//创建ajax对象
	/*var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status == 200){
			console.log(xhr.responseText);
		}
	}

	var data = 'x='+x +'y='+y;
	var url  = '__url__/index';
	xhr.open('post',url,true);

	xhr.setRequestHeader('content-type','application/x-www-from-urlencoded');
	xhr.send(data);*/
	  
}  

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

//向数据库传参
/*document.getElementById("send").onclick=function () {  
	$.ajax({  
	 type:"POST",  
	 url: "__URL__/judged",//index.php/Welcome/insert  
		data:{  
			//stuName: $('#stuName').val(),  
			//stuAge:$('#stuAge').val(),  
			//stuNumber:$('#stuNumber').val()  
			strx:(x - bbox.left) * (canvas.width / bbox.width).val(),
			stry:(y - bbox.top) * (canvas.height / bbox.height).val()


		},  
	 dataType:'text',  
	 success:function (data) {  
		 if(data){  
			 document.getElementById('Result').innerHTML=data;  
			 $("input:not('#send')").val('');  
		 }  
	 },  
	 error:function () {  
		 document.getElementById('Result').innerHTML="出错啦！";  
		 $("input:not('#send')").val('');  
	 }  

 });  
  }*/  

canvas.onmousemove = function (e) {  
    var location = getLocation(e.clientX, e.clientY);  
    var message = document.getElementById("message");  
    message.innerHTML = "x=" + location.x + " ,y=" + location.y;
};
//题号
var question_num = 0;

var stop = false;
canvas.onmousedown = function(z) {
	console.log("点击开始！");
    var loc1 = getLocation(z.clientX, z.clientY);  
	canvas.onmousemove = function(e) {
    	var loc2 = getLocation(e.clientX, e.clientY);
		if (stop == false){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			draw(loc1.x, loc1.y, loc2.x, loc2.y,'black', 'stroke');
		}
		canvas.onmouseup = function(){
			stop = true;
			console.log("点击结束！")
			++question_num;
			console.log(question_num);
			
//			return loadXMLDoc(loc1.x, loc1.y, loc2.x, loc2.y);
		}
	}
}
function jvxing(x1, y1, x2, y2){
	draw(x1, y1, x2, y2,'black', 'stroke');
}
//画一个矩形
var draw = function(x1, y1, x2, y2, color, type) {
	    ctx.beginPath();
	    ctx.moveTo(x1, y1);
	    ctx.lineTo(x2, y1);
	    ctx.lineTo(x2, y2);
	    ctx.lineTo(x1, y2);
	    ctx[type + 'Style'] = color;
	    ctx.closePath();
	    ctx[type]();
}
//ajax 异步加载
function loadXMLDoc(x1, y1, x2, y2)
{	//alert("发送请求（坐标位置）\nhttp://127.0.0.1/pic.php?"+"x1="+x1+"x2="+x2+"y1="+y1+"y2="+y2);
    alert("发送请求（坐标位置）\__url__/index?"+"x1="+x1+"x2="+x2+"y1="+y1+"y2="+y2);
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{	
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
//			alert(xmlhttp.responseText);
			
//			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
//	xmlhttp.open("GET","发送请求（坐标位置）http://127.0.0.1/pic.php?"+"x1="+x1+"x2="+x2+"y1="+y1+"y2="+y2,true);
    //xmlhttp.open("GET","发送请求（坐标位置）__url__/index?"+"x1="+x1+"x2="+x2+"y1="+y1+"y2="+y2,true);
	//xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//xmlhttp.send();
}