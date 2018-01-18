<?php if (!defined('THINK_PATH')) exit();?> <!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8"/>
		<title></title>
		<link rel="stylesheet" type="text/css" href="/autoyj/Public/css/index_pic.css"/>
		<script src="jquery.min.js"></script>
	</head>
	<body>
				<form action="/autoyj/index.php/Home/Index/index" method="post">
						<textarea class="x" name="x"></textarea>
						<textarea class="y" name="y"></textarea>
						<textarea class="data_x" name="data_x"></textarea>
						<textarea class="data_y" name="data_y"></textarea>
						<input type="submit" value="ok" >
				</form>
		 <img src="/autoyj/Public/img/1.jpg"id="paper" hidden="True"/>
		 <p id="message"></p>
		 <canvas id="test_paper" style="border:3px solid red; background-image: url(/autoyj/Public/img/1.jpg); background-repeat: no-repeat;"></canvas>
		 <script src="/autoyj/Public/js/index_pic.js"></script>

	     
       
	</body>
</html>